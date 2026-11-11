/* BeweMotion — capa de movimiento compartida por las animaciones de habilidades.
   Dos recursos, pensados para intercalarse dentro de un mismo loop:

   1. CÁMARA  — el celular completo se desplaza y escala dentro del encuadre.
                Se aplica como transform sobre el contenedor .bw-cam; el escenario
                recorta, así que un scale > 1 deja el teléfono cortado arriba/abajo.
   2. POP-OUT — el elemento importante del momento se clona en una capa por encima
                del marco, crece, sobresale del teléfono y gana sombra mientras la
                pantalla se oscurece. Al terminar vuelve exactamente a su sitio.

   El celular nunca se mueve durante un pop-out: cada recurso ocupa su propio momento. */
(function () {
  var EASE = 'cubic-bezier(.45,0,.2,1)';
  var LIFT = 'cubic-bezier(.34,1.4,.64,1)';

  /* Encuadres. El celular es MÁS GRANDE que la ventana del escenario, así que
     nunca se ve completo: siempre queda cortado arriba o abajo. Cada valor
     encuadra la zona donde está ocurriendo la acción; el translateY va en % de
     la altura del teléfono, así el encuadre es el mismo a cualquier tamaño. */
  var CAM = {
    top:    'translateY(18%) scale(1)',      // cabecera + primeras filas
    bottom: 'translateY(-18%) scale(1.05)',  // último mensaje + pie, con zoom-in
    chat:   'translateY(4%) scale(1.06)',    // sólo el hilo: deja el compositor y la barra fuera del encuadre
    mid:    'translateY(-4%) scale(0.98)',   // zona central, zoom-out leve
    near:   'translateY(-13%) scale(1.04)',  // acercamiento a un elemento bajo
    full:   'translateY(2%) scale(0.98)'     // encuadre neutro (sigue recortado)
  };

  /* Levanta `el` fuera de la pantalla y lo devuelve a su sitio.

     host : el contenedor de cámara (.bw-cam), usado como sistema de coordenadas.
     layer: la capa donde se inserta el clon. DEBE venir renderizada en la
            plantilla, dentro de .bw-cam y siempre vacía: si creáramos el div
            aquí con appendChild, React vería un hermano que no controla y
            dejaría de reconciliar ese subárbol.
     opts : { layer, scale, dy, hold, radius, shade, out:'left'|'right', frame, overlap }

     Todo se calcula en coordenadas locales de `host` (dividiendo por la escala
     que la cámara le aplica), nunca en píxeles de pantalla: el desbordamiento
     es siempre el mismo porcentaje del ancho del teléfono. */
  function pop(host, el, opts) {
    if (!host || !el || !el.getBoundingClientRect) return;
    var o = opts || {};
    var grow = o.scale || 1.3, hold = o.hold || 1400;

    var r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;

    var hostRect = host.getBoundingClientRect();
    var hostW = host.offsetWidth;
    if (!hostW || !hostRect.width) return;
    var camK = hostRect.width / hostW;              // escala que aporta la cámara

    /* El teléfono se dibuja escalado, así que getBoundingClientRect da píxeles de
       PANTALLA. El clon se construye con el tamaño de maquetación real para que el
       texto se envuelva igual que en el original, y se reduce con un transform. */
    var lw = el.offsetWidth || r.width;
    var lh = el.offsetHeight || r.height;
    var k = (r.width / lw) / camK;                  // escala de ajuste del teléfono

    var toLocalX = function (x) { return (x - hostRect.left) / camK; };
    var toLocalY = function (y) { return (y - hostRect.top) / camK; };

    var ox = toLocalX(r.left), oy = toLocalY(r.top);   // origen local del elemento
    var cx = ox + lw * k / 2;

    var dx = o.dx || 0, dy = (o.dy || 0);
    if (o.out && o.frame) {
      var f = o.frame.getBoundingClientRect();
      var fl = toLocalX(f.left), fw = f.width / camK;
      var halfW = lw * k * grow / 2;
      var over = o.overlap != null ? o.overlap : fw * 0.26;
      dx = o.out === 'left'
        ? (fl - over + halfW) - cx
        : (fl + fw + over - halfW) - cx;
    }

    /* El vertical tampoco puede ser un número fijo: el original puede estar alto
       o bajo en el hilo según el scroll y el encuadre, y al ampliarlo desde su
       centro se sale del escenario. Si no cabe, se recoloca dentro con margen. */
    if (o.stage) {
      var st = o.stage.getBoundingClientRect();
      var halfH = lh * k * grow / 2;
      var cy = toLocalY(r.top) + lh * k / 2;
      var topL = toLocalY(st.top), botL = toLocalY(st.bottom);
      var pad = (o.padY != null ? o.padY : 18) / camK;
      var wantTop = cy + dy - halfH, wantBot = cy + dy + halfH;
      if (wantBot - wantTop > (botL - topL) - pad * 2) {
        dy = (topL + botL) / 2 - cy;            // no cabe: se centra
      } else if (wantTop < topL + pad) {
        dy += (topL + pad) - wantTop;
      } else if (wantBot > botL - pad) {
        dy -= wantBot - (botL - pad);
      }
    }

    var layer = o.layer;
    if (!layer) return;
    /* nunca puede quedar más de un clon vivo: si un pop anterior no terminó de
       limpiarse (pestaña en segundo plano, animación cancelada, remount), sus
       restos se retiran aquí antes de insertar el nuevo */
    while (layer.firstChild) layer.removeChild(layer.firstChild);

    var c = el.cloneNode(true);
    c.style.cssText = el.style.cssText;
    c.style.position = 'absolute';
    /* posicionado por el centro: con la caja a tamaño de maquetación y
       transform-origin al 50 %, scale(k) la deja justo encima del original */
    c.style.left = (ox - (lw - lw * k) / 2) + 'px';
    c.style.top = (oy - (lh - lh * k) / 2) + 'px';
    c.style.width = lw + 'px';
    c.style.height = lh + 'px';
    c.style.margin = '0';
    c.style.transformOrigin = '50% 50%';
    c.style.pointerEvents = 'none';
    c.style.animation = 'none';
    c.style.transition = 'none';
    c.style.visibility = 'visible';
    c.style.flex = 'none';
    c.style.maxWidth = 'none';
    c.style.minWidth = '0';
    c.style.maxHeight = 'none';
    c.style.boxSizing = 'border-box';
    if (o.radius != null) c.style.borderRadius = o.radius + 'px';
    layer.appendChild(c);

    var prev = el.style.visibility;
    el.style.visibility = 'hidden';
    var done = false;
    var restore = function () {
      if (done) return;
      done = true;
      el.style.visibility = prev || '';
      if (c.parentNode) c.parentNode.removeChild(c);
    };
    /* red de seguridad: `finished` no resuelve si la animación se cancela o la
       pestaña está en segundo plano, y sin esto el original se quedaría oculto */
    setTimeout(restore, 550 + hold + 900);

    var rest = 'scale(' + k + ')';
    var up = 'translate(' + dx + 'px,' + dy + 'px) scale(' + (k * grow) + ')';
    var shadow = '0 26px 60px -14px rgba(10,37,64,.45)';
    var kf = [
      { transform: rest, boxShadow: '0 0 0 rgba(10,37,64,0)' },
      { transform: up, boxShadow: shadow }
    ];

    c.style.transform = rest;
    if (o.shade) o.shade.style.opacity = '1';
    var lift = c.animate(kf, { duration: 550, easing: LIFT, fill: 'forwards' });

    /* Al acabar la subida se fija el transform como estilo en línea y se cancela
       la animación: el navegador deja de tratar el clon como capa compuesta y
       vuelve a rasterizar el texto — sin esto se ve borroso toda la pausa. */
    if (lift.finished && lift.finished.then) {
      lift.finished.then(function () {
        if (!c.parentNode) return;
        lift.cancel();
        c.style.transform = up;
        c.style.boxShadow = shadow;
      }, function () {});
    }

    setTimeout(function () {
      if (o.shade) o.shade.style.opacity = '0';
      var back = c.animate([kf[1], kf[0]], { duration: 450, easing: EASE, fill: 'forwards' });
      if (back.finished && back.finished.then) back.finished.then(restore, restore);
      else setTimeout(restore, 460);
    }, 550 + hold);
  }

  window.BeweMotion = { pop: pop, CAM: CAM, EASE: EASE, LIFT: LIFT };
})();

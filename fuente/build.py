import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))


def luna(size, estado='lista'):
    def i(n):
        return '<i></i>' * n
    return (
        f'<div class="linda st-{estado} a-ninguno au-jabon optimizada" style="--s:{size}px" role="img" aria-label="Luna, la IA de gurú">'
        '<div class="halo"></div><div class="pulse"></div><div class="pulse p2"></div><div class="shadow"></div><div class="body">'
        '<div class="rimglow"><div class="rim glow"></div></div><div class="core"></div><div class="rim"></div><div class="rim hot"></div><div class="rimline"></div>'
        '<div class="orbits"><span></span><span></span><span></span></div>'
        '<div class="eyes"><div class="eye"></div><div class="eye"></div><div class="acc acc-gafas"><div class="lens"></div><div class="bridge"></div><div class="lens"></div></div></div>'
        f'<div class="bubble"></div><div class="wstrokes">{i(6)}</div><div class="w2">{i(5)}</div><div class="bstrokes">{i(7)}</div>'
        f'<div class="water">{i(5)}</div><div class="liquid"><b></b>{i(9)}</div><div class="lgloss"></div><div class="soap">{i(13)}</div>'
        '<div class="acc acc-sombrero"><div class="brim"></div><div class="crown"></div><div class="hband"></div></div>'
        '<div class="acc acc-audifonos"><div class="arc"></div><div class="cup l"></div><div class="cup r"></div></div>'
        '</div></div>'
    )


REG = 'https://login.conectaluna.ai/register'
LOGO = 'https://www.freemium.gurusoluciones.com/hubfs/logo_guru_v.png'

# Las escenas son las de la web de Bewe (la plataforma es la misma), copiadas
# a escenas/ con escenas.py: dicen «Luna» y se ven recortadas, sin el teléfono
# entero.
hab = [
    ('Atiende', 'Responde, cotiza y cierra, a la hora que sea.', 'atiende', 'Luna atendiendo conversaciones de WhatsApp e Instagram'),
    ('Agenda', 'Llena tu semana sin que abras el calendario.', 'agenda', 'La agenda del día con los turnos que dio Luna'),
    ('Recuerda', 'Sabe quién es cada cliente antes de que lo mires.', 'recuerda', 'El registro de una clienta con las etiquetas que puso Luna'),
    ('Crea', 'El contenido de tus redes, hecho y programado.', 'crea', 'Una publicación para Instagram propuesta por Luna, lista para aprobar'),
    ('Publica', 'Tu negocio en internet sin que lo armes.', 'publica', 'La página web de un negocio con el chat para reservar'),
    ('Registra', 'Cuánto entró y cuánto salió, sin libretas.', 'registra', 'Los movimientos de la caja del día anotados por Luna'),
]

cards = ''.join(
    f'<article class="hab"><div class="hab-top"><h3>{v}</h3><p>{l}</p></div>'
    f'<div class="escena"><img class="poster" src="posters/{e}.webp" alt="" aria-hidden="true">'
    f'<iframe src="escenas/{e}.html" title="{t}" tabindex="-1"></iframe></div></article>'
    for v, l, e, t in hab
)

pasos = [
    ('Registrate', 'Tocá «Registrate» y dejá tus datos. Te toma un minuto.'),
    ('Te escribimos por WhatsApp', 'Apenas te registrás, te llega un mensaje para conocer tu negocio y dejar todo listo.'),
    ('Luna aprende tu negocio', 'Le pasás tu Instagram o tu web, archivos o simplemente le contás. Aprovecha lo que ya tenés.'),
    ('Luna se pone a trabajar', 'Atiende, da turnos y te cuenta cómo va todo. Vos decidís lo importante.'),
]
pasos_html = ''.join(
    f'<li><span class="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>' for i, (t, d) in enumerate(pasos)
)

# Las fotos de las páginas de industrias de Bewe, mezcladas e intercaladas
# (belleza y estética, wellness y gimnasios, salud y odontología, construcción). Ver fotos.txt.
rubros = [l.split('|') for l in open('fotos.txt', encoding='utf-8').read().splitlines()]
rub = ''.join(f'<figure class="foto"><img src="{src}" alt="{lab}" loading="lazy" width="240" height="320"><figcaption>{lab}</figcaption></figure>' for lab, src in rubros)

faq = [
    ('¿Quién es Luna?', 'Luna es la inteligencia artificial de gurú y se ocupa del día a día de tu negocio. Atiende las consultas de tus clientes y les da turno en la misma conversación. Guarda el registro de cada cliente, con lo que pide y cuándo vino, para que sepas quién es antes de atenderlo. Te propone contenido y campañas listas para aprobar, anota los movimientos de la caja y te responde cuando le preguntás por tus turnos, tus clientes o cómo va la semana. Vos ganás tiempo y te quedás con las decisiones importantes.'),
    ('¿Necesito saber de inteligencia artificial?', '<p>No. Le hablás a Luna como le hablarías a alguien de tu equipo:</p><ul>'
     '<li><b>Por mensaje o nota de voz</b>, con tus palabras, sin comandos ni configuraciones técnicas.</li>'
     '<li><b>Ella te trae propuestas</b>: contenido, campañas y avisos sobre tus clientes. Vos decidís qué sale.</li>'
     '<li><b>Aprende con el uso</b>: lo que le contás de tu negocio lo usa en las próximas conversaciones, y lo que todavía no sabe responder queda anotado para que se lo enseñes.</li>'
     '</ul>'),
    ('¿Por dónde atiende Luna a mis clientes?', '<p>Luna atiende las 24 horas, los 7 días de la semana, en:</p><ul>'
     '<li><b>WhatsApp, Instagram y Facebook</b>: responde los mensajes privados y también los comentarios de tus publicaciones.</li>'
     '<li><b>El chat de tu web</b>: atiende a quien entra a tu página.</li>'
     '</ul><p>En todos los canales hace lo mismo:</p><ul>'
     '<li>Responde precios, horarios y servicios con la información de tu negocio.</li>'
     '<li>Da el turno en la misma conversación, según la disponibilidad real de tu agenda.</li>'
     '<li>Manda recordatorios automáticos antes de cada turno.</li>'
     '<li>Te pasa la conversación cuando hace falta una persona, y vos podés tomar el control cuando quieras.</li>'
     '</ul>'),
    ('¿Qué información necesito para empezar?', '<p>La que ya tenés. Luna aprende de:</p><ul>'
     '<li>Tu web y tu Instagram.</li>'
     '<li>Tus servicios, con sus precios y duraciones.</li>'
     '<li>Tus horarios y los de tu equipo.</li>'
     '<li>Archivos que ya uses, como una lista de precios o tus preguntas frecuentes.</li>'
     '<li>Una descripción de tu negocio, contada con tus palabras.</li>'
     '</ul><p>No hace falta tenerlo todo el primer día. Luna empieza con lo que haya y después lo completás o lo cambiás cuando quieras.</p>'),
    ('¿Qué pasa después de registrarme?', '<ul>'
     '<li><b>Te escribimos por WhatsApp</b> al número que dejaste, para conocer tu negocio.</li>'
     '<li><b>Luna aprende tu negocio</b> con lo que le compartís: servicios, precios, horarios y la forma en que atendés.</li>'
     '<li><b>Se conectan tus canales</b> y Luna empieza a atender a tus clientes.</li>'
     '</ul><p>Desde ahí le hablás cuando quieras, para preguntarle cómo va tu negocio o pedirle lo que necesites.</p>'),
]
faq_html = ''.join(
    f'<details><summary>{q}<span class="pm"></span></summary><div class="faq-r">{a if a.startswith("<") else "<p>" + a + "</p>"}</div></details>' for q, a in faq
)

luna_css = open('luna.css', encoding='utf-8').read()
page_css = open('page.css', encoding='utf-8').read()
body = open('body.html', encoding='utf-8').read()

repl = {
    '{{LUNA_HERO}}': luna(150),
    '{{LUNA_CIERRE}}': luna(110),
    '{{CARDS}}': cards,
    '{{PASOS}}': pasos_html,
    '{{RUBROS}}': rub + rub,
    '{{FAQ}}': faq_html,
    '{{LOGO}}': LOGO,
}
for k, v in repl.items():
    body = body.replace(k, v)

html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Luna, la IA que lleva tu negocio | gurú</title>
<meta name="description" content="Luna atiende a tus clientes por WhatsApp, Instagram, Facebook y tu web, les da turno y te cuenta cómo va tu negocio. Registrate y ponela a trabajar.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&display=swap" rel="stylesheet">
<style>
/* Luna: el personaje de Linda con la paleta de gurú */
{luna_css}
{page_css}
</style>
</head>
{body}
</html>'''
open('guru-landing-luna.html', 'w', encoding='utf-8').write(html)
print(len(html))

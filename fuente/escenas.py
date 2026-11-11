"""Copia las escenas de la web de Bewe a guru/escenas/, autónomas y con Luna.

- Sigue todas las referencias a /animations/(_shared|_fonts|_assets)/ y las copia.
- Rutas absolutas -> relativas (para poder subir la carpeta a cualquier hosting).
- «Linda» -> «Luna» en los textos visibles.
- El personaje se recolorea con la paleta de Luna (la app NO cambia de color).
"""
import os
import re
import shutil

PUB = 'C:/w-phn/public'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'escenas')

ESCENAS = {
    'atiende': 'sales-assistant/1-atiende.html',
    'agenda': 'agenda/1-dia.html',
    'recuerda': 'crm/2-etiqueta.html',
    'crea': 'marketing/1-propuestas.html',
    'publica': 'pagina-web/1-conversacion.html',
    'registra': 'finanzas/1-caja-del-dia.html',
}

REF = re.compile(r'/animations/((?:_shared|_fonts|_assets)/[A-Za-z0-9._-]+)')

MAPA = {
    '60a5fa': (161, 51, 235), '67e8f9': (94, 214, 241), '34d399': (217, 4, 159),
    'fad19e': (135, 217, 78), 'fef3c7': (242, 228, 249), '75c9c8': (68, 120, 166),
    'ccfbf1': (223, 247, 251), '0a2540': (36, 5, 55), '355452': (61, 20, 82),
}


def recolor(css):
    for h, (r, g, b) in MAPA.items():
        css = re.sub('#' + h, '#%02x%02x%02x' % (r, g, b), css, flags=re.I)
        R, G, B = (int(h[i:i + 2], 16) for i in (0, 2, 4))
        css = re.sub(r'(rgba?\()\s*%d\s*,\s*%d\s*,\s*%d' % (R, G, B),
                     lambda m: m.group(1) + '%d, %d, %d' % (r, g, b), css)
    return css


def es_css_linda(texto):
    return '.linda' in texto and ('soap' in texto or 'rimglow' in texto)


def luna(texto):
    # Solo la palabra con mayúscula: las clases CSS (`linda`) no se tocan.
    return re.sub(r'\bLinda\b', 'Luna', texto)


if os.path.isdir(OUT):
    shutil.rmtree(OUT)
os.makedirs(OUT)

pendientes, vistos = [], set()
for nombre, ruta in ESCENAS.items():
    t = open(os.path.join(PUB, 'animations', ruta), encoding='utf-8').read()
    pendientes += REF.findall(t)
    t = REF.sub(lambda m: m.group(1), t)  # relativo al documento (escenas/)
    # La etiqueta «Luna» de las tarjetas, en lavanda y morado de gurú.
    # Va dentro de la plantilla (antes de cerrar <helmet>): el <head> de fuera
    # lo sustituye el empaquetador al montar la escena.
    estilo = r'<style>.ch.ai{background:#F5EBFF!important;color:#8A3BD0!important}.v2-card .a b{color:#B056F6!important}<\u002Fstyle>'
    t = t.replace(r'<\u002Fhelmet>', estilo + r'<\u002Fhelmet>')
    for k, u in enumerate(sorted(set(re.findall(r"https://d8j0ntlcm91z4\.cloudfront\.net/[A-Za-z0-9_/.-]+?\.png", t)))):
        t = t.replace(u, f'_img/post-{k + 1}.webp')
    open(os.path.join(OUT, nombre + '.html'), 'w', encoding='utf-8').write(luna(t))

while pendientes:
    rel = pendientes.pop()
    if rel in vistos:
        continue
    vistos.add(rel)
    src = os.path.join(PUB, 'animations', rel)
    dst = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    if rel.endswith(('.css', '.js', '.html', '.javascript')):
        t = open(src, encoding='utf-8').read()
        pendientes += REF.findall(t)
        if rel.endswith('.css'):
            t = REF.sub(lambda m: '../' + m.group(1), t)  # relativo al CSS
            if es_css_linda(t):
                t = recolor(t)
        elif rel.endswith('.html'):
            t = REF.sub(lambda m: '../' + m.group(1), t)
            t = luna(t)
        else:
            t = REF.sub(lambda m: m.group(1), t)  # JS: relativo al documento
            t = luna(t)
        open(dst, 'w', encoding='utf-8').write(t)
    else:
        shutil.copyfile(src, dst)

shutil.copytree(os.path.join(os.path.dirname(OUT), 'img_cache'), os.path.join(OUT, '_img'))
print(len(vistos), 'ficheros copiados')
for rel in sorted(vistos):
    print(' ', rel)

import voseo  # textos de «tú» a «vos»
voseo.aplica(OUT)

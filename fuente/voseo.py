"""Pasa los textos de las escenas de «tú» a «vos», como el resto de la landing.

La pauta es solo para Argentina: también se cambian «hueco» por «turno» y el
barrio de la web de ejemplo. escenas.py lo aplica al copiar; se puede correr
solo sobre escenas/ ya copiadas.
"""
import glob
import os

VOSEO = {
    '¿Te busco un hueco?': '¿Te busco un turno?',
    'para apartarte un hueco': 'para reservarte un turno',
    'La armo con lo que vendes': 'La armo con lo que vendés',
    'Tú decides si sale': 'Vos decidís si sale',
    'Agenda tu cita': 'Agendá tu turno',
    'Reserva en segundos': 'Reservá en segundos',
    'Pregúntame lo que sea': 'Preguntame lo que sea',
    'Studio Aurora · Polanco': 'Studio Aurora · Palermo',
    'Toma el control para responder tú y pausarla; podrás devolvérsela cuando termines.':
        'Tomá el control para responder vos y pausarla; vas a poder devolvérsela cuando termines.',
    'ha traído tres referidas': 'trajo tres referidas',
    'desde que la abres': 'desde que la abrís',
    'Cobrarlas lo decides tú.': 'Cobrarlas lo decidís vos.',
}


def aplica(carpeta):
    for f in glob.glob(os.path.join(carpeta, '*.html')):
        t = open(f, encoding='utf-8').read()
        for tu, vos in VOSEO.items():
            t = t.replace(tu, vos)
        open(f, 'w', encoding='utf-8').write(t)


if __name__ == '__main__':
    aplica(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'escenas'))

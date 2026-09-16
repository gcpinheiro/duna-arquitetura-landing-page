from pathlib import Path
from PIL import Image

source = Path('../images')
output = Path('public/images/projetos')
output.mkdir(parents=True, exist_ok=True)

projects = {
    'Desafio LEV Apartamento Estúdio - Tais Franco.png': 'estudio-sampa.webp',
    'Cena 1.2 - Final.png': 'quarto-contemporaneo.webp',
    'Studio nectar.png': 'estudio-nectar.webp',
    'freepik__fotografia-arquitetnica-externa-hiperrealista-repr__39701.png': 'casa-zahy-herdades.webp',
    'Tais-Franco-Cozinha-Atlântica.png': 'cozinha-atlantica.webp',
    'magnific_fotografia-arquitetonica-_sw4erbzl8e.png': 'frame-office.webp',
    'Curso 01.png': 'base-lounge.webp',
    'boteco faustino.png': 'boteco-faustino.webp',
}

for source_name, output_name in projects.items():
    image = Image.open(source / source_name).convert('RGB')
    image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
    image.save(output / output_name, 'WEBP', quality=86, method=6)
    print(f'{source_name} -> {output_name} ({image.width}x{image.height})')

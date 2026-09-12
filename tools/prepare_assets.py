from pathlib import Path
from PIL import Image, ImageDraw
import pymupdf as f, io

for folder in ['public/brand','public/images','public/fonts']:
    Path(folder).mkdir(parents=True, exist_ok=True)
d = f.open('../TAIS FRANCO - Portfolio.pdf')
def crop(page,box,name,width=1600):
    data=d.extract_image(d[page-1].get_images()[0][0])['image']
    im=Image.open(io.BytesIO(data)).convert('RGB')
    w,h=im.size
    im=im.crop(tuple(round(v*(w if i%2==0 else h)) for i,v in enumerate(box)))
    im.thumbnail((width,2000))
    im.save(f'public/images/{name}.webp',quality=86)
for page,name in [(14,'cozinha-atlantica'),(17,'casa-zahy'),(26,'casa-ambar'),(11,'quarto-contemporaneo'),(23,'escritorio'),(34,'residencia')]:
    crop(page,(0.005,.012,.735,.985),name)
crop(2,(.06,.11,.371,.897),'thais-franco',750)
crop(16,(.005,.012,.985,.985),'cozinha-atlantica-2')
crop(19,(.005,.012,.49,.985),'casa-zahy-2')
crop(27,(.005,.012,.985,.985),'casa-ambar-2')
files=list(Path('../02. Marca d_agua/01. Colorido').glob('*.png'))
thumbs=[]
for i,p in enumerate(files):
    im=Image.open(p);im.thumbnail((230,150))
    tile=Image.new('RGB',(250,185),'#e5e4df')
    tile.paste(im,((250-im.width)//2,0),im if im.mode=='RGBA' else None)
    ImageDraw.Draw(tile).text((5,160),f'{i}: {p.stem[20:]}',fill='black');thumbs.append(tile)
sheet=Image.new('RGB',(1000,185*((len(thumbs)+3)//4)),'white')
for i,im in enumerate(thumbs):sheet.paste(im,(i%4*250,i//4*185))
sheet.save('tmp/materials/logos.jpg')
Path('tmp/materials/logos.txt').write_text('\n'.join(str(p) for p in files),encoding='utf8')

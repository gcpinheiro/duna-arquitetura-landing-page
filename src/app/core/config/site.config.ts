const message = 'Olá! Gostaria de conversar sobre um projeto com a Duna Arquitetura.';
export const SITE = {
  name: 'Duna Arquitetura',
  architect: 'Thais Franco',
  email: 'contato.dunaarq@gmail.com',
  instagram: 'https://www.instagram.com/duna.arqui/',
  instagramLabel: '@duna.arqui',
  whatsapp: `https://wa.me/5585997173960?text=${encodeURIComponent(message)}`,
  phones: [
    {
      label: '(85) 99717-3960',
      href: `https://wa.me/5585997173960?text=${encodeURIComponent(message)}`,
    },
    {
      label: '(85) 99806-9699',
      href: `https://wa.me/5585998069699?text=${encodeURIComponent(message)}`,
    },
  ],
} as const;

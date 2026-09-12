import { Project } from '../../../shared/models/project.model';
export const PROJECTS: Project[] = [
  {
    id: 'zahy',
    title: 'Casa Zahy Herdades',
    category: 'Residencial',
    type: 'Reforma · Visualização arquitetônica',
    description:
      'Uma residência antiga ganha um novo olhar como hospedagem de curta duração. Materiais naturais e integração com a paisagem orientam uma proposta voltada ao conforto e ao bem-estar.',
    source: 'Portfólio de Thais Franco · projeto 04 · páginas 17–20.',
    images: [
      {
        src: '/images/casa-zahy.webp',
        alt: 'Visualização da Casa Zahy Herdades com fachada de pedra, pergolado de madeira e jardim',
      },
      {
        src: '/images/casa-zahy-2.webp',
        alt: 'Ambiente interno da Casa Zahy Herdades com madeira e materiais naturais',
      },
    ],
  },
  {
    id: 'atlantica',
    title: 'Cozinha Atlântica',
    category: 'Interiores',
    type: 'Interiores · Visualização arquitetônica',
    description:
      'Texturas minerais, madeira e tons profundos se encontram em um ambiente de convivência. A composição evidencia os materiais, a iluminação e a relação com o verde.',
    source: 'Portfólio de Thais Franco · projeto 03 · páginas 14–16.',
    images: [
      {
        src: '/images/cozinha-atlantica.webp',
        alt: 'Visualização da Cozinha Atlântica com ilha verde, marcenaria de madeira e jardim vertical',
      },
      {
        src: '/images/cozinha-atlantica-2.webp',
        alt: 'Vista da Cozinha Atlântica em direção ao jardim e à área de refeições',
      },
    ],
  },
  {
    id: 'ambar',
    title: 'Casa Âmbar',
    category: 'Residencial',
    type: 'Residencial · Visualização arquitetônica',
    description:
      'Uma paleta quente e materiais naturais dão unidade a ambientes amplos. Madeira, iluminação e elementos de destaque compõem espaços de encontro e acolhimento.',
    source: 'Portfólio de Thais Franco · projeto 07 · páginas 26–28.',
    images: [
      {
        src: '/images/casa-ambar.webp',
        alt: 'Visualização da sala de jantar da Casa Âmbar com cadeiras azuis e marcenaria em madeira',
      },
      {
        src: '/images/casa-ambar-2.webp',
        alt: 'Visualização dos ambientes integrados de estar e jantar da Casa Âmbar',
      },
    ],
  },
  {
    id: 'quarto',
    title: 'Quarto contemporâneo',
    category: 'Interiores',
    type: 'Interiores · Visualização arquitetônica',
    description:
      'Tons profundos, iluminação indireta e texturas naturais criam uma atmosfera introspectiva. Um olhar contemporâneo para um ambiente confortável e acolhedor.',
    source: 'Portfólio de Thais Franco · projeto 02 · páginas 11–13. Título descritivo para a web.',
    images: [
      {
        src: '/images/quarto-contemporaneo.webp',
        alt: 'Visualização de quarto com tons escuros, iluminação indireta e cabeceira estofada',
      },
    ],
  },
];
export const SERVICES = [
  {
    number: '01',
    title: 'Arquitetura residencial',
    text: 'Para quem deseja repensar a forma de morar. Projetos que conectam espaços, luz natural e materiais à vida cotidiana.',
    detail: 'Novas residências e projetos de reforma.',
  },
  {
    number: '02',
    title: 'Arquitetura de interiores',
    text: 'Para transformar a experiência de um ambiente. Layout, materialidade e iluminação em uma composição funcional e acolhedora.',
    detail: 'Ambientes residenciais e espaços de trabalho.',
  },
  {
    number: '03',
    title: 'Visualização arquitetônica',
    text: 'Para enxergar as possibilidades de um projeto. Imagens que comunicam atmosferas, volumes e escolhas de materiais.',
    detail: 'Representação visual de arquitetura e interiores.',
  },
];

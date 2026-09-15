import { Project } from '../../../shared/models/project.model';
export const PROJECTS: Project[] = [
  {
    id: 'zahy',
    title: 'Casa Zahy Herdades',
    category: 'Residencial',
    type: 'Reforma · Visualização arquitetônica',
    description:
      'Uma residência antiga ganha um novo olhar como hospedagem de curta duração. Materiais naturais e integração com a paisagem orientam uma proposta voltada ao conforto e ao bem-estar.',
    source: 'Portfólio de Taís Franco · projeto 04 · páginas 17–20.',
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
    source: 'Portfólio de Taís Franco · projeto 03 · páginas 14–16.',
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
    id: 'sampa',
    title: 'Estúdio Sampa',
    category: 'Residencial',
    type: 'Residencial · Visualização arquitetônica',
    description:
      'Um estúdio compacto pensado para locação de curta duração. Tons escuros, iluminação cênica e materiais aconchegantes compõem uma experiência urbana sofisticada em um espaço reduzido.',
    source: 'Portfólio de Taís Franco · projeto 05 · páginas 21–22 (Sampa Studio).',
    images: [
      {
        src: '/images/estudio-sampa.webp',
        alt: 'Visualização do Estúdio Sampa com sofá cinza, almofadas em terracota e uma ampla janela com persianas',
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
    source: 'Portfólio de Taís Franco · projeto 02 · páginas 11–13. Título descritivo para a web.',
    images: [
      {
        src: '/images/quarto-contemporaneo.webp',
        alt: 'Visualização de quarto com tons escuros, iluminação indireta e cabeceira estofada',
      },
    ],
  },
];
export const AUDIENCES: ReadonlyArray<{ number: string; title: string; text: string }> = [
  {
    number: '01',
    title: 'Investidores',
    text: 'Quem compra studio para alugar por temporada e quer um imóvel que se destaque e valorize.',
  },
  {
    number: '02',
    title: 'Primeiro imóvel',
    text: 'Jovens profissionais que querem aproveitar cada metro do primeiro apartamento.',
  },
  {
    number: '03',
    title: 'Incorporadoras',
    text: 'Parcerias para apartamento decorado e padrão de acabamento de studios na planta.',
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

import { Project } from '../../../shared/models/project.model';
export const PROJECTS: Project[] = [
  {
    id: 'sampa',
    title: 'Estúdio Sampa',
    category: 'Estúdios',
    type: 'Estúdio · Interiores',
    description:
      'Tons profundos, iluminação cênica e materiais aconchegantes definem um estúdio compacto de atmosfera urbana.',
    source: 'Imagem e identificação fornecidas pela Duna Arquitetura.',
    images: [
      {
        src: '/images/projetos/estudio-sampa.webp',
        alt: 'Estúdio Sampa com cama, tons escuros, iluminação cênica e ampla janela',
      },
    ],
  },
  {
    id: 'quarto-contemporaneo',
    title: 'Quarto Contemporâneo',
    category: 'Estúdios',
    type: 'Estúdio · Interiores',
    description:
      'Um ambiente compacto que integra descanso e trabalho por meio de marcenaria, tons sóbrios e iluminação pontual.',
    source: 'Imagem e identificação fornecidas pela Duna Arquitetura.',
    images: [
      {
        src: '/images/projetos/quarto-contemporaneo.webp',
        alt: 'Quarto Contemporâneo com cama, bancada de trabalho e parede em tom verde profundo',
      },
    ],
  },
  {
    id: 'nectar',
    title: 'Estúdio Nectar',
    category: 'Estúdios',
    type: 'Estúdio · Interiores',
    description:
      'Marcenaria clara e iluminação indireta organizam um espaço compacto pensado para aproveitar cada metro.',
    source: 'Imagem e identificação fornecidas pela Duna Arquitetura.',
    images: [
      {
        src: '/images/projetos/estudio-nectar.webp',
        alt: 'Estúdio Nectar com cama, bancada integrada, marcenaria clara e iluminação indireta',
      },
    ],
  },
  {
    id: 'zahy',
    title: 'Casa Zahy Herdades',
    category: 'Residencial',
    type: 'Residencial · Arquitetura',
    description:
      'Pedra, madeira e paisagismo se encontram em uma residência integrada à paisagem e voltada ao acolhimento.',
    source: 'Imagem e identificação fornecidas pela Duna Arquitetura.',
    images: [
      {
        src: '/images/projetos/casa-zahy-herdades.webp',
        alt: 'Casa Zahy Herdades com fachada de pedra, pergolado de madeira e jardim',
      },
    ],
  },
  {
    id: 'cozinha-atlantica',
    title: 'Cozinha Atlântica',
    category: 'Residencial',
    type: 'Residencial · Interiores',
    description:
      'Texturas minerais, madeira e tons profundos compõem uma cozinha de convivência conectada ao verde.',
    source: 'Imagem e identificação fornecidas pela Duna Arquitetura.',
    images: [
      {
        src: '/images/projetos/cozinha-atlantica.webp',
        alt: 'Cozinha Atlântica com ilha verde, marcenaria de madeira e jardim vertical',
      },
    ],
  },
  {
    id: 'frame-office',
    title: 'Frame Office',
    category: 'Corporativo',
    type: 'Corporativo · Interiores',
    description:
      'Um ambiente de trabalho contemporâneo organizado pela luz natural, por linhas limpas e por uma paleta sóbria.',
    source: 'Imagem e identificação fornecidas pela Duna Arquitetura.',
    images: [
      {
        src: '/images/projetos/frame-office.webp',
        alt: 'Frame Office com mesas de trabalho, cadeiras claras, estantes e ampla janela',
      },
    ],
  },
  {
    id: 'base-lounge',
    title: 'Base Lounge',
    category: 'Corporativo',
    type: 'Corporativo · Interiores',
    description:
      'Uma área de convivência flexível com pontos de apoio, assentos informais e elementos de cor.',
    source: 'Imagem fornecida pela Duna Arquitetura; nome final informado pelo usuário.',
    images: [
      {
        src: '/images/projetos/base-lounge.webp',
        alt: 'Base Lounge com pufes cinza, bancada, armários em terracota e iluminação sobre trilhos',
      },
    ],
  },
  {
    id: 'boteco-faustino',
    title: 'Boteco Faustino',
    category: 'Comercial',
    type: 'Comercial · Interiores',
    description:
      'Um ponto comercial aberto e convidativo, com balcão central, cores marcantes e integração com a circulação.',
    source: 'Imagem e identificação fornecidas pela Duna Arquitetura.',
    images: [
      {
        src: '/images/projetos/boteco-faustino.webp',
        alt: 'Boteco Faustino com balcão verde e terracota em uma galeria comercial',
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
    title: 'Projeto de interiores completo para studios',
    text: 'Do conceito ao detalhamento técnico, pensado para maximizar cada metro quadrado.',
  },
  {
    number: '02',
    title: 'Otimização de espaço e marcenaria sob medida',
    text: 'Soluções modulares e multifuncionais — essenciais em espaços compactos.',
  },
  {
    number: '03',
    title: 'Acompanhamento de execução',
    text: 'Compatibilização técnica e acompanhamento até a entrega, sem surpresa de obra.',
  },
  {
    number: '04',
    title: 'Consultoria para incorporadoras',
    text: 'Decoração de apartamento modelo e padronização de studios para lançamentos.',
  },
];

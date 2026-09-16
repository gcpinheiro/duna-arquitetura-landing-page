export interface Project {
  id: string;
  title: string;
  category: 'Estúdios' | 'Residencial' | 'Corporativo' | 'Comercial';
  type: string;
  description: string;
  images: { src: string; alt: string }[];
  source: string;
}

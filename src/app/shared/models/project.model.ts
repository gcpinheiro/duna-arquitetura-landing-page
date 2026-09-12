export interface Project {
  id: string;
  title: string;
  category: 'Residencial' | 'Interiores';
  type: string;
  description: string;
  images: { src: string; alt: string }[];
  source: string;
}

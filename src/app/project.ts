import {Image} from './image';

export interface Project {
  id: number;
  name: string;
  caption?: string;
  images: Image[];
  desc: string;
  url?: string;
  github?: string;
  skills: string[];
  featured: boolean;
  links?: {
    url: string,
    name: string,
    icon?: string
  } [];
}

import {Image} from './image';

export interface Experience {
  id: number;
  name: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  desc: string;
  image?: Image;
  url?: string;
}

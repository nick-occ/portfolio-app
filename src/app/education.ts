import { DecimalPipe } from '@angular/common';
import {Image} from './image';

export interface Education {
  id: number;
  university: string;
  location: string;
  degree: string;
  major: string;
  gpa?: string;
  startDate: string;
  endDate: string;
  image?: Image;
}

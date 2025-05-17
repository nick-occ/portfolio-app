import {AfterContentInit, AfterViewChecked, Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Image} from '../image';

@Component({
    selector: 'app-project-page-image',
    templateUrl: './project-page-image.component.html',
    styleUrls: ['./project-page-image.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class ProjectPageImageComponent implements OnChanges  {
  @Input() currentImage: Image;

  constructor() { }

  // ngAfterContentInit(): void {
  //   console.log(this.currentImage)
  // }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('currentImage changed:', changes.currentImage?.currentValue);
  }
}

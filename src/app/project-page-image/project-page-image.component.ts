import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {Image} from '../image';

@Component({
    selector: 'app-project-page-image',
    templateUrl: './project-page-image.component.html',
    styleUrls: ['./project-page-image.component.css'],
    standalone: false
})
export class ProjectPageImageComponent implements OnInit {
  @Input() currentImage: Image;

  constructor() { }

  ngOnInit(): void {
  }
}

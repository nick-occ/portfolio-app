import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../project';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    standalone: true,
    imports: [RouterModule]
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit(): void {
  }

  openProject(): void {
    alert(this.project.id);
  }

}

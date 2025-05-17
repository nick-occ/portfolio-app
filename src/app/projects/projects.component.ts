import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';
import { ProjectComponent } from '../project/project.component'

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    standalone: true,
    imports: [ProjectComponent,CommonModule]
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getProjects();
    console.log(this.getProjects());
  }

  getProjects(): void {
    this.portfolioService.getProjects().subscribe(project => {
      this.projects = project;
    });
  }

}

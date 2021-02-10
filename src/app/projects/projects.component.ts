import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
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

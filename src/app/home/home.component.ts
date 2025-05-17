import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';
import { ProjectComponent } from '../project/project.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [CommonModule,ProjectComponent]
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getFeatureProjects();
  }

  getFeatureProjects(): void {
    this.portfolioService.getFeaturedProjects().subscribe(project => {
      this.projects = project;
    });
  }

}

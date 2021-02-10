import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PortfolioService } from '../portfolio.service';
import {Project} from '../project';
import {Image} from '../image';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  id: number;
  project: Project;
  image: Image;

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.portfolioService.getProject(this.id).subscribe(project => {
      this.project = project;
    });
  }

}

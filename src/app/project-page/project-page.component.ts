import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PortfolioService } from '../portfolio.service';
import {Project} from '../project';
import {Image} from '../image';

import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.css'],
    imports:[MatCardModule, NgbModule]
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

import { Component, OnInit } from '@angular/core';
import {Resume} from '../resume';
import {PortfolioService} from '../portfolio.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    standalone: false
})
export class ResumeComponent implements OnInit {
  resume: Resume;

  constructor(private  portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getResume();
  }

  getResume(): void {
    this.portfolioService.getResume().subscribe(resume => {
      this.resume = resume;
    });
  }

}

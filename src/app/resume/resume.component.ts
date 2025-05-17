import { Component, OnInit } from '@angular/core';
import {Resume} from '../resume';
import {PortfolioService} from '../portfolio.service';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    standalone: true,
    imports:[MatCardModule,MatExpansionModule,MatIconModule]
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

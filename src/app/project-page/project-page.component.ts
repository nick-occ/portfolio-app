import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { take } from 'rxjs/operators';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PortfolioService } from '../portfolio.service';
import {Project} from '../project';
import {Image} from '../image';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectPageImageComponent } from '../project-page-image/project-page-image.component'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.css'],
    standalone:true,
    imports:[CommonModule, MatCardModule, MatIconModule, NgbModule, ProjectPageImageComponent]
})
export class ProjectPageComponent implements OnInit, AfterViewInit {

  id: number;
  project: Project;
  image: Image;

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    private location: Location,
    private sanitizer: DomSanitizer,
    private ngZone: NgZone,
    private scroller: ViewportScroller,
  ) { }

  ngOnInit(): void {
    this.getProject();
    // window.scrollTo(0,0);
  }

  ngAfterViewInit(): void {
    window.scrollTo(0,0);
  }

  getProject(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.portfolioService.getProject(this.id).subscribe(project => {
      this.project = project;

      this.ngZone.onStable.pipe(take(1)).subscribe(() => {
        requestAnimationFrame(() => {
          this.scroller.scrollToPosition([0, 0]);
          (document.activeElement as HTMLElement)?.blur();
        });
      });
    });
  }

  getSafeDesc(desc: string): SafeHtml {
    if (!desc) return '';
    const doc = new DOMParser().parseFromString(desc, 'text/html');

    // Remove anchors that cause scrolling
    doc.querySelectorAll('a[href^="#"]').forEach(a => a.removeAttribute('href'));

    // Remove autofocus
    doc.querySelectorAll('[autofocus]').forEach(el => el.removeAttribute('autofocus'));

    // Optionally strip heading IDs
    doc.querySelectorAll('h1[id],h2[id],h3[id]').forEach(h => h.removeAttribute('id'));

    return this.sanitizer.bypassSecurityTrustHtml(doc.body.innerHTML);
}

}

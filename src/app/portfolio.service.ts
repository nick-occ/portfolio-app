import { Injectable } from '@angular/core';
import {from, Observable, of, Subject, Subscription} from 'rxjs';

import {Project} from './project';
import {PROJECT} from './project-data';
import {RESUME} from './resume-data';
import {Resume} from './resume';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }


  getResume(): Observable<Resume> {
    return of(RESUME);
  }

  getProject(id: number): Observable<Project> {
    return of(PROJECT
      .filter((project) => project.id === id)
      .reduce((acc: any, it: Project) => it, { }));
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECT);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(PROJECT
      .filter(project => project.featured === true));
  }
}

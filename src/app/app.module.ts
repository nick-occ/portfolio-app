import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import {FormsModule} from '@angular/forms';
import { ProjectPageImageComponent } from './project-page-image/project-page-image.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectPageComponent},
  { path: '', component: HomeComponent },

  { path: 'resume', component: ResumeComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ProjectsComponent,
    ResumeComponent,
    HomeComponent,
    ProjectComponent,
    ProjectPageComponent,
    ProjectPageImageComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        FlexLayoutModule,
        MatMenuModule,
        MatCardModule,
        MatExpansionModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

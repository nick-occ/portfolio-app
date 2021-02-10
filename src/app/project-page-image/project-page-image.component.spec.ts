import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageImageComponent } from './project-page-image.component';

describe('ProjectPageImageComponent', () => {
  let component: ProjectPageImageComponent;
  let fixture: ComponentFixture<ProjectPageImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPageImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSamplesComponent } from './project-samples.component';

describe('ProjectSamplesComponent', () => {
  let component: ProjectSamplesComponent;
  let fixture: ComponentFixture<ProjectSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSampleComponent } from './project-sample.component';

describe('ProjectSampleComponent', () => {
  let component: ProjectSampleComponent;
  let fixture: ComponentFixture<ProjectSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

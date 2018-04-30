import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectSamplesComponent } from './project-samples/project-samples.component';
import { ProjectNavComponent } from './project-nav/project-nav.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { ProjectSampleComponent } from './project-sample/project-sample.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectsComponent, ProjectSamplesComponent, ProjectNavComponent, ProjectDescriptionComponent, ProjectSampleComponent]
})
export class ProjectModule { }

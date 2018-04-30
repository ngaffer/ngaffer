import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperiencesComponent } from './experiences.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ],
  declarations: [ExperiencesComponent, ExperienceListComponent, ExperienceComponent]
})
export class ExperienceModule { }

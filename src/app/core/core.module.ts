import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectService } from './services/project.service';
import { ExperienceService } from './services/experience.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ],
  declarations: [HeaderComponent, NotFoundComponent],
  providers: [ProjectService, ExperienceService]
})
export class CoreModule { }

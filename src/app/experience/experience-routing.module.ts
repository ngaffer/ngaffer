import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ExperienceComponent} from './experience/experience.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }

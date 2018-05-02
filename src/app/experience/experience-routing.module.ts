import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ExperiencesComponent} from './experiences.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }

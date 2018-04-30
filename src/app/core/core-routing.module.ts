import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'experience',
    pathMatch: 'full'
  },
  {
    path: 'experience',
    loadChildren: '../experience/experience.module#ExperienceModule'
  },
  {
    path: 'portfolio',
    loadChildren: '../portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: 'project',
    loadChildren: '../project/project.module#ProjectModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

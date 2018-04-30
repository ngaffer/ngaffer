import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioFilterComponent } from './portfolio-filter/portfolio-filter.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioComponent, PortfolioListComponent, PortfolioFilterComponent, PortfolioProjectComponent]
})
export class PortfolioModule { }

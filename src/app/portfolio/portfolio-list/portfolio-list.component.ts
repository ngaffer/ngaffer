import {Component, OnInit} from '@angular/core';

import {Project} from '../../core/models/project.model';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  projects: Project[] = [
    new Project('Target Content Creation System', 'description of TCCS'),
    new Project('Target Canada', 'description of Target Canada')
  ];

  constructor() { }

  ngOnInit() {
  }

}

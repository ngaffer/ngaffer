import {Component, OnInit} from '@angular/core';

import {ExperienceService} from '../../core/services/experience.service';
import {Experience} from '../../core/models/experience.model';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {

  experiences: Experience[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.listExperiences();
  }

  listExperiences()  {
    this.experienceService.getExperiences()
      .subscribe(
        // function which runs on success
        (experiences: Experience[]) => { this.experiences = experiences; },
        // function which runs on error
        err => console.error(err),
        // function which runs on completion
        () => console.log('done loading experiences')
      );
  }

}

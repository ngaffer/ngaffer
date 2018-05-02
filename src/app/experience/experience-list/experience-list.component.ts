import {Component, OnInit} from '@angular/core';

// import {ExperienceService} from '../../core/services/experience.service';
import {Experience} from '../../core/models/experience.model';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {


  experiences: Experience[] = [
    new Experience('developer', 'another company', 'experience'),
    new Experience('designer', 'Target Creative', 'experience')
  ];

  // public experience;

  // constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    // this.getExperiences();
  }

  // getExperiences() {
  //   this.experienceService.getExperiences().subscribe(
  //     // function which runs on success
  //     data => { console.log(data) },
  //     // function which runs on error
  //     err => console.error(err),
  //     // function which runs on completion
  //     () => console.log('done loading experiences')
  //   );
  // }

}

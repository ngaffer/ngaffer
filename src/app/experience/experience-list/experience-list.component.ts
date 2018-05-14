import {Component, OnInit} from '@angular/core';

import {ExperienceService} from '../../core/services/experience.service';
import {Experience} from '../../core/models/experience.model';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {

  // experiences: Experience[]; // used with experience service
  // constructor(private experienceService: ExperienceService) { }

  experiences: Experience[] = [
    new Experience(
      'Web App Developer Co-Founder',
      'Mischief Studios',
      'experience',
      '2017',
      'Now',
      '<ul><li>Currently working on an Angular 5 chat web app using Express, MongoDB, and Node.</li>' +
      '<li>Sunset a legacy POS system and integrated BigCommerce and Square as e-commerce solutions for managing inventory online and in-store at the MN Marine Art Museum.\n</li>' +
      '<li>Partnered with Afixia on fontend and PHP based web development in Concrete5 CMS.</li></ul>',
      'Angular5'),
    new Experience(
      'Software Engineer',
      'Target.com Content Creation Software',
      'experience',
      '2014',
      '2016',
      '- Developed the front end for a web-based CMS using HTML, CSS and JavaScript on top of PHP Zend Framework2, MongoDB and various integrated APIs. - Tailored collaborative interactions with stakeholders to understand business pain points. - Utilized modern workflows including automation via grunt and version control via Git.',
      'HTML'),
    new Experience(
      'Lead Email Developer',
      'Target Marketing Email Development',
      'experience',
      '2013',
      '2013',
      '- Built responsive email-compatible HTML templates on top of an internal PHP framework. - Minimized production errors with rigorous cross-client test plans using Litmus. - Lead initiative to dynamically populate api-driven product data into email content. - Consulted and documented email development best practices and code standards.',
      'Angular5'),
    new Experience(
      'Contract Developer',
      'Target Canada Website Development',
      'experience',
      '2012',
      '2012',
      '- Developed a fully responsive corporate website on a development team of six. - Utilized HTML5, CSS3, LESS, JavaScript and PHP. - Minimized disability barriers with strict compliance to W3C Web Accessibility Guidelines. - Tested front-end code in multiple browsers to ensure cross-browser compatibility.',
      'HTML5'),
    new Experience(
      'Jr Web Developer',
      'Afixia Web Design & Development',
      'experience',
      '2011',
      '2012',
      '- Increased productive capacity with development of 34 websites in 18 months. - Empowered clients with training and integration of Concrete5, a PHP based CMS. - Customized PHP add-ons for calendars, carousels, menus, forms, videos and RSS feeds. - Utilized modern HTML5 / CSS3 and focused on seamless cross-platform experiences.',
      'Angular5')
  ];

  ngOnInit() {
    // this.listExperiences();
  }

  // listExperiences()  {
  //   this.experienceService.getExperiences()
  //     .subscribe(
  //       // function which runs on success
  //       (experiences: Experience[]) => { this.experiences = experiences; },
  //       // function which runs on error
  //       err => console.error(err),
  //       // function which runs on completion
  //       () => console.log('done loading experiences')
  //     );
  // }

}

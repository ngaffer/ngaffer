import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Experience} from '../models/experience.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExperienceService {
  private experiences: Experience[] = [];

  constructor(private httpClient: HttpClient) { }

  getExperiences(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>('/experiences');
  }

}

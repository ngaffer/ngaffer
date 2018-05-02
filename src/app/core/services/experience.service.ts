import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExperienceService {

  constructor(private httpClient: HttpClient) { }

  getExperiences() {
    return this.httpClient.get('/experiences');
  }

}

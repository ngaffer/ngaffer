import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getProjects() {
    return this.httpClient.get('/projects');
  }

}

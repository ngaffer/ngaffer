import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
// import {catchError, map, tap} from 'rxjs/operators';
import 'rxjs/Rx';

import {Experience} from '../models/experience.model';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class ExperienceService {
  private experiences: Experience[] = [];

  constructor(private http: Http) { }

  getExperiences() {
    // TODO: update deprecated Http to HttpClient
    // httpClient.get returns the body of the response as an untyped JSON object by default
    // Applying the optional type specifier, <Experience[]> , gives you a typed result object
    // The catchError() operator intercepts an Observable that failed and passes it to the error handler
    return this.http.get('http://localhost:3000/experiences')
      .map((response: Response) => {
          console.log(response);
          const experiences = response.json().obj;
          let transformedExperiences: Experience[] = [];
          for (let experience of experiences) {
            transformedExperiences.push(new Experience(experience.title, experience.company));
          }
          this.experiences = transformedExperiences;
          return transformedExperiences;
        });
        //, catchError(this.handleError('getExperiences', []))
      // );
  }

  // private handleError(operation = 'operation', result?: T) {
  //   return (error: any): Observable => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}

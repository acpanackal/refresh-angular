import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesService {
  constructor(private httpClient: HttpClient) {}
  getCourses() {
    //hereb http call
    return ['Apples', 'Bananas', 'Oranges'];
  }
  getImages(): Observable<any> {
    return this.httpClient.get(
      'https://api.thedogapi.com/v1/images/search?limit=5'
    );
  }
}

import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses', //custom html elememt here goes actually css selectors .className
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let item of list">
        {{ item }}
      </li>
    </ul>
    <ul>
      <div *ngFor="let image of listImages" class="card" id="{image.id}">
        <div class="card-header col-lg-4">
          <img
            src="{{ image.url }}"
            alt="Not loaded"
            width="250"
            height="200"
          />
        </div>
        <div class="card-block px-2 col-lg-8">
          <h5 class="card-title">
            <strong>Title</strong>
          </h5>
          <p class="card-text">This is a card</p>
        </div>
      </div>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'Here is a sample List';
  list;
  listImages;
  constructor(service: CoursesService) {
    this.list = service.getCourses();
    service.getImages().subscribe((data) => {
      this.listImages = data;
      console.log(data);
    });
  }
}

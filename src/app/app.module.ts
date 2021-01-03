import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CoursesComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

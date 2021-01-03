import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector:'courses',//custom html elememt here goes actually css selectors .className 
        template:`
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let item of list">
            {{item}}
            </li>
        </ul>
        <ul>
        <li *ngFor="let image of listImages">
        <img src={{image.url}}/>
        </li>
    </ul>
        `
})

export class CoursesComponent{
    title="Here is a sample List";
    list;
    listImages;
    constructor(service: CoursesService){
        this.list = service.getCourses();
        service.getImages().subscribe(
            data=>{
                this.listImages=data;
                console.log(data);
            }
        );
    }
}
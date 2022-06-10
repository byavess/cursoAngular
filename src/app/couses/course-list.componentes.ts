import { CourseListService } from './course-list-service';
import { Component, OnInit} from '@angular/core';
import { Course } from './course';

@Component ({
     //selector: 'course-list',
     templateUrl: './course-list.componentes.html'
 })
export class CouseListComponent implements OnInit {
    filteredCouses: Course [] = [];
    _courses : Course[] = []; 
    _filterBy!: string;

    constructor(private courseListService: CourseListService, ){ }

    ngOnInit(): void {
        this._courses = this.courseListService.retrieveAll();   
        this.filteredCouses= this._courses;
       
    }   
    set filter (value : string){
        this._filterBy = value;

        this.filteredCouses = this._courses.filter((course:Course) => 
        course.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);


    }
get filter () {
return this._filterBy;
}
} 

function course(course: any, Course: any): Course[] {
    throw new Error('Function not implemented.');
}


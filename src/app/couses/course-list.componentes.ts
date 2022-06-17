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
        this.retrieveAll();
    }

    retrieveAll(): void { 
        this.courseListService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCouses = this._courses;
            },
            error: err => console.log('Error', err) 
        })
    }

    deleteById(courseId: number): void { 
        this.courseListService.deleteById(courseId).subscribe({
            next: () => { 
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter (value: string) { 
        this._filterBy = value;

        this.filteredCouses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() { 
        return this._filterBy;
    };

};
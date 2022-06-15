import { CourseListService } from './course-list-service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";


@Component({
    templateUrl: './course-info.component.html'
})
    export class CourseInfoComponent implements OnInit{
        course!: Course;

        constructor(private activatedRoute: ActivatedRoute, private courseListService: CourseListService) { }
        ngOnInit(): void{
            this.course=this.courseListService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!)
            
}
    }
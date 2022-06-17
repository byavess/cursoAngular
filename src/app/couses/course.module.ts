import { NgModule } from '@angular/core';
import { CouseListComponent } from './course-list.componentes'; 
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/pipe.module';


@NgModule({
    declarations: [
        CouseListComponent,
        CourseInfoComponent,
       
    
    ], 
    imports: [
        CommonModule,
        FormsModule,
       StarModule,
       AppPipeModule,
             RouterModule.forChild([
            {
                path: 'courses', component: CouseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule { 

}
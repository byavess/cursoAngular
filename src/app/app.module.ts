import { CourseInfoComponent } from './couses/course-info.component';
import { Error404Compoennt } from './error-404/error-404.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './couses/nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CouseListComponent } from './couses/course-list.componentes';
import { CourseListService } from './couses/course-list-service';


@NgModule({

  declarations: [
    AppComponent,
    ButtonComponent,
    CouseListComponent,
    StarComponent,  
    ReplacePipe,
    NavBarComponent,
    Error404Compoennt,
    CourseInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CouseListComponent
      },
      {
        path:'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      
      {
        path: '**', component: Error404Compoennt
    }
    ])
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


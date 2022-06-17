import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CourseModule } from './couses/course.module';
import { Error404Component } from './core/componente/error-404/error-404.component';




@NgModule({

  declarations: [
    AppComponent,
    Error404Component,
   
    
  
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([

      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }, 

      {
        path: '**', component: Error404Component
      }
    ]),
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
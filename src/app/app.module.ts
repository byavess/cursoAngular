import { RouterModule } from '@angular/router';
import { NavBarComponent } from './couses/nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CouseListComponent } from './couses/course-list.componentes';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CouseListComponent,
    StarComponent,  
    ReplacePipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CouseListComponent
      }
    ])
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CouseListComponent } from './couses/curso-list.componentes';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CouseListComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//fabricio
//seria igual uma casa,cada comodo tem suas partircularidades , limitador de contexto ex: produto, compra
//componentes e o que vai da vida 
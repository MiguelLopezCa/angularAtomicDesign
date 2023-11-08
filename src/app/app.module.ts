import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottonComponent } from './atoms/botton/botton.component';
import { ButtonComponent } from './atoms/button/button.component';
import { TitleComponent } from './atoms/title/title.component';
import { DescrptionComponent } from './atoms/descrption/descrption.component';
import { CartComponent } from './molecule/cart/cart.component';
import { TituloComponent } from './atoms/titulo/titulo.component';
import { DescripcionComponent } from './atoms/descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    BottonComponent,
    ButtonComponent,
    TitleComponent,
    DescrptionComponent,
    CartComponent,
    TituloComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

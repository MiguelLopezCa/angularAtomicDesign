import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TituloComponent } from './titulo/titulo.component';
import {DescripcionComponent} from './descripcion/descripcion.component'
@NgModule({
  declarations: [
    ButtonComponent,
    TituloComponent,
    DescripcionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TituloComponent,
    DescripcionComponent
  ]
})
export class AtomsModule { }

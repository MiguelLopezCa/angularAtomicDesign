import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { BotonComponent } from './boton/boton.component';
import { DatosComponent } from './datos/datos.component';



@NgModule({
  declarations: [
    TituloComponent,
    DescripcionComponent,
    BotonComponent,
    DatosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TituloComponent,
    DescripcionComponent,
    BotonComponent,
    DatosComponent  
  ]
})
export class AtomsModule { }

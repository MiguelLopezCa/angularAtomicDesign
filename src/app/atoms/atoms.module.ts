import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { BotonComponent } from './boton/boton.component';
import { DatosComponent } from './datos/datos.component';
import { AvanceComponent } from './avance/avance.component';
import { BarraComponent } from './barra/barra.component';



@NgModule({
  declarations: [
    TituloComponent,
    DescripcionComponent,
    BotonComponent,
    DatosComponent,
    AvanceComponent,
    BarraComponent
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

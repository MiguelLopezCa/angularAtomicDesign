import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AtomsModule } from '../atoms/atoms.module';
import { RegistroComponent } from './registro/registro.component';
import { AvanceComponent } from './avance/avance.component';

@NgModule({
  declarations: [
    CardComponent,
    RegistroComponent,
    AvanceComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
  ],
  exports:[
    CardComponent,
    RegistroComponent,
    AvanceComponent
    ]
})
export class MoleculesModule { }

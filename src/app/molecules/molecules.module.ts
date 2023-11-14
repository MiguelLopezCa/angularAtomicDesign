import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AtomsModule } from '../atoms/atoms.module';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    CardComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
  ],
  exports:[
    CardComponent,
    RegistroComponent
    ]
})
export class MoleculesModule { }

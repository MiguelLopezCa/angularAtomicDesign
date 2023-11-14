import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRegistrarseComponent } from './page-registrarse/page-registrarse.component';
import { PageAvanceComponent } from './page-avance/page-avance.component';
import { PageCursosComponent } from './page-cursos/page-cursos.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismModule } from '../organism/organism.module';
@NgModule({
  declarations: [
    PageRegistrarseComponent,
    PageAvanceComponent,
    PageCursosComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    OrganismModule,
  ],
  exports:
  [
    PageAvanceComponent,
    PageCursosComponent,
    PageRegistrarseComponent 
  ]
})
export class PageModule { }

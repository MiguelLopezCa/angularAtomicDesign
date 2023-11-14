import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCursosComponent } from './page/page-cursos/page-cursos.component';
import { PageAvanceComponent } from './page/page-avance/page-avance.component';
import { PageRegistrarseComponent } from './page/page-registrarse/page-registrarse.component';
import { RegistroComponent } from './molecules/registro/registro.component';
const routes: Routes = [
  {
    path: 'registrarse',
    component: PageRegistrarseComponent
  },
  {
    path: 'avance', 
    component: PageAvanceComponent
  },
  {
    path: 'cursos',
    component: PageCursosComponent
  },
  {
    path: '',
    redirectTo: '/cursos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

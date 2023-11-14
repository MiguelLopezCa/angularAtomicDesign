import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datos',
  template: '<h3>{{ datos }}</h3>', 
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {
  @Input() datos: string = '';

}

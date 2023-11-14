import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  template: '<p>{{ descripcion }}</p>', 
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent {
  @Input() descripcion: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  template: '<h3>{{ titulo }}</h3>',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {
  @Input() titulo: string = '';

}

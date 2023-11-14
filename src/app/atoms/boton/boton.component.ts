import { Component ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent {
  @Input() buttonText: string = 'Registrarse';
  @Output() clicEnBoton = new EventEmitter<void>();

  handleClick(): void {
    this.clicEnBoton.emit();
  }
}

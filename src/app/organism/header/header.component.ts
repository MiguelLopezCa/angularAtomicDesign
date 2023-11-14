  import { Component, EventEmitter, Input, Output } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })
  export class HeaderComponent {
    @Input() buttonText: string = 'Cursos';
    @Output() clicEnBoton = new EventEmitter<void>();

    constructor(private router: Router) {}

    handleClick(): void {
      this.clicEnBoton.emit()
      this.router.navigate(['/cursos']);
      ;
    }
  }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avance',
  templateUrl: './avance.component.html',
  styleUrls: ['./avance.component.scss']
})
export class AvanceComponent {
  constructor(private router: Router) {}

  otraFuncion(): void {
    this.router.navigate(['/registrarse']);
  }
}

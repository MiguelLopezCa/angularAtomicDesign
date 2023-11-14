
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private router: Router) {}

  otraFuncion(): void {
    this.router.navigate(['/registrarse']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css'],
})
export class NavigationButtonComponent {
  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/']);
  }
}

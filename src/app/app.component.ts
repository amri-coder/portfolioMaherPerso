import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioMaher';
  constructor(private router: Router) {}
  goToAboutUs() {
    this.router.navigate(['/', 'about']);
  }
  goToContact() {
    this.router.navigate(['/', 'contact']);
  }
  goToRealisations() {
    this.router.navigate(['/', 'realisations']);
  }
}

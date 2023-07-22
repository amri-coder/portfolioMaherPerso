import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {
  }

  goToHeader() {
    this.router.navigate(['/', 'header']);
  }
  goToRealisations() {
    this.router.navigate(['/', 'realisations']);
  }
  goToCompetences() {
    this.router.navigate(['/', 'competences']);
  }
  goToContact() {
    this.router.navigate(['/', 'contact']);
  }
}



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { CompetencesComponent } from './competences/competences.component';
import { SeeMoreComponent } from './see-more/see-more.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'about', component: HeaderComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'seeMore', component: SeeMoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { CardsPageComponent } from './components/cards-page/cards-page.component';
import { SetsAreaComponent } from './components/sets-area/sets-area.component';

export const routes: Routes = [
  { path: '', component: SetsAreaComponent },
  { path: 'cards', component: CardsPageComponent },
];

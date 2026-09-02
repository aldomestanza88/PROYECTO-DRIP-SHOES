import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { Hombres } from './hombres/hombres';
import { Ninos } from './ninos/ninos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'hombres', component: Hombres },
  { path: 'ninos', component: Ninos },
  { path: '**', redirectTo: '' },
];
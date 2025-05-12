import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CharacterSelectorComponent } from './characters/pages/character-selector/character-selector.component';
import { CharacterResolver } from './characters/resolvers/characters.resolver';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'characters',
    canActivate: [authGuard],
    resolve: {
      characterData: CharacterResolver,
    },
    children: [
      { path: 'selector', component: CharacterSelectorComponent },
    ]},
  { path: '**', redirectTo: 'login' }
];

import { Component, inject } from '@angular/core';
import { AuthStore } from '../../../auth/auth.store';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly authStore = inject(AuthStore)
}

import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthStore } from '../auth.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private store = inject(AuthStore);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  error = signal<string | null>(null);

  fg = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  submit() {
    this.store.login(this.fg.value as any).subscribe({
      next: () => this.router.navigate(['characters', 'selector']),
      error: e => this.error.set(e.message)
    });
  }
  
}

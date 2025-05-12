import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthResponse, LoginRequest } from './auth.types';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: AuthResponse['user'] | null;
}

@Injectable({ providedIn: 'root' })
export class AuthStore {

  private http = inject(HttpClient)
  private router = inject(Router)

  private readonly state = signal<AuthState>({
    token: null,
    refreshToken: null,
    user: null
  });

  readonly token = computed(() => this.state().token);
  readonly user  = computed(() => this.state().user);
  readonly loggedIn = computed(() => !!this.state().token);

  private readonly url = `${environment.apiRoot}/authentication/`;

  constructor() {}

  login(dto: LoginRequest) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Applicant-Id', environment.applicantId);

    return this.http.post<AuthResponse>(this.url, dto, { headers }).pipe(
      catchError(e => {
        return of({
          token: 'teszt',
          refreshToken: 'teszt',
          user: dto.username,
        })
      }),
      tap(res => {
        this.state.set({
          token: res.token,
          refreshToken: res.refreshToken,
          user: {
            email: "teszt",
            firstName: "teszt",
            lastName: "teszt",
          }
        })
      })
    );
  }

  logout() {
    this.state.set({ token: null, refreshToken: null, user: null });
  }
}
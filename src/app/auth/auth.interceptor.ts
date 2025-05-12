import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthStore } from './auth.store';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const store = inject(AuthStore);
  const token = store.token();

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq);
};
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const guardiaoGuard: CanActivateFn = (route, state) => {

  let podeAcessar = inject(AuthService).podeAcessar();

  if (!podeAcessar) {

    inject(Router).navigate(['hello-world']);

    return false;
  }

  return true;
};

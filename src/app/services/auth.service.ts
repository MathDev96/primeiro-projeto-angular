import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  update(acesso: boolean) {
    sessionStorage.setItem('podeAcessar', acesso.toString());
  }

  podeAcessar(): boolean {
    let podeAcessarString = sessionStorage.getItem('podeAcessar');

    if (!podeAcessarString) {
      return false;
    }

    return JSON.parse(podeAcessarString);
  }
}

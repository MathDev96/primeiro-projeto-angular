import { Component } from '@angular/core';
import { FilhoAComponent } from "../filho-a/filho-a.component";
import { FilhoBComponent } from "../filho-b/filho-b.component";
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FilhoAComponent, FilhoBComponent, RouterModule, CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  
  textoVaiProFilho: string= '';
  textoRecebido: string = '';
  
  
  constructor (private authService: AuthService) {

  }

  podeAcessar: boolean = false;

  ngOnInit () {
    
    this.podeAcessar = this.authService.podeAcessar();

  }

  alterarAcesso (e:any) {
    this.authService.update(e.target.checked);
  }  
  
  mensagem() {
  alert("Salvo !")
  }
}

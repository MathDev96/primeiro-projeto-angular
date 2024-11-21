import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  
  classButtonVerde = 'button verde';
  classButtonVermelho = 'button vermelho';
  
  aplicarEstiloVerde = false;
  
  name = '';
  
  camposVisiveis= true;
  
  clientes = [
    {nome: 'Matheus'},
    {nome: 'Renato'},
    {nome: 'Allan'},
    {nome: 'Thamara'}
  ];
  
  //Por usar o propriedade ngStyle, eu só consigo declarar os styles como modo classe {''};
  estilosParagrafo = {'font-size': '14px',
    'font-style': 'italic'};
    
  alterarParaMaiusculo($event: string) {
    this.name = $event.toUpperCase();
  }

  aplicarEstilos () {

  this.aplicarEstiloVerde = !this.aplicarEstiloVerde;
  }
  
  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;
  }
}

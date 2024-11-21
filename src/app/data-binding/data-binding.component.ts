import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  
  estilizarTitulo = false;
  buttonClass = { button: true, verde: false };
  message = 'Meu primeiro Data Binding!';
  isDisabled = false;
  ariaLabel = "Botão Fechar";
  nomeClientes = '';

  // Caminhos das duas imagens
  angularImage = 'assets/angular-img.png';
  alternateImage = 'assets/logo-angular.webp';
  imagePath = this.angularImage; // Inicializa com a primeira imagem

  closeButton = `
    border: 1px solid;
    border-radius: 40px;
    padding: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  imageWidth = 300;

  enableCloseButton() {
    this.isDisabled = !this.isDisabled;
  }

  aplicarEstilo() {
    // Alterna o estilo do título e a classe do botão
    this.estilizarTitulo = !this.estilizarTitulo;
    this.buttonClass.verde = !this.buttonClass.verde;

    // Alterna entre as duas imagens usando as variáveis corretamente
    this.imagePath = this.imagePath === this.angularImage 
      ? this.alternateImage 
      : this.angularImage;
  }
}

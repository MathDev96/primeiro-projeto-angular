import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filho-a.component.html',
  styleUrl: './filho-a.component.css'
})
export class FilhoAComponent {


    @Input() texto = '';

    @Output() textoPreenchido = new EventEmitter<string>();

    enviar(value: string) {
      this.textoPreenchido.emit(value);
    }
}

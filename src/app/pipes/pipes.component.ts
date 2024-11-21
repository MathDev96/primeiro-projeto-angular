import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  date: Date = new Date();

  nameText: string = '';

  value: number = 45.50;

  pi: number = 3.14159265359;

  changeName(name: string) {
    this.nameText = name;
  }
}

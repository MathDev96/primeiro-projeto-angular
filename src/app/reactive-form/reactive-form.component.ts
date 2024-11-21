import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  constructor (private formBuilder: FormBuilder) {
    
  }
  
  //Ultilizando FormGroup e FormControl

  // profileForm = new FormGroup({
    
  //   name: new FormControl(''),
    
  //   cpf: new FormControl(''),

  //   address: new FormGroup ({
      
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')

  //   }
  // )
    
  // });
  
  //Ultilizando FormBuilder

    profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      nickname: this.formBuilder.array([this.formBuilder.control('')])
    });

    get nicknames () {
      return this.profileForm.get('nickname') as FormArray
    }

  PreencherFormulario () {
    
    this.profileForm.patchValue({
      name: 'Matheus',
      cpf: '2213243234',

      address: {
        street: 'cabuçu de baixo',
        city: 'Rio de janeiro',
        state: 'RJ',
        zip: '13443234'

      }
    })
  }
  
  adicionarNickname () {
    this.nicknames.push(this.formBuilder.control(''));
  }

  submitForm() {
    console.warn(this.profileForm.value)
  }
}

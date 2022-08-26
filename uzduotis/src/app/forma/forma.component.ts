import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent {

  title = 'forma';
     

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      vardas: ['', Validators.required],
      pastas: ['', Validators.required],
      telefonas: ['', Validators.required],
      projektas: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      aprasymas: ['', Validators.required],
      uzdaprasymas: [''],
      terminas: [''],
      nuoroda: [''],
      failai: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      komentarai: [''],
    });
  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
      console.log(this.thirdFormGroup.value);
  }

}

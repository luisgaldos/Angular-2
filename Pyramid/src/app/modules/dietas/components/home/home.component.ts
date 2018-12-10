import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Genero } from '../../../model/genero.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form : FormGroup;
  BMR: number;
  RI: number;

  constructor( private fb: FormBuilder ) { 
    this.form = fb.group({
        gender: ['M', Validators.required],
        activityLevel: ['1', Validators.required],
        weight: ['0', Validators.required],
        height: ['0', Validators.required],
        age: ['0', Validators.required]
    });
  }

  get gender() { return this.form.get('gender'); }
  get weight() { return this.form.get('weight'); }
  get height() { return this.form.get('height'); }
  get activityLevel() { return this.form.get('activityLevel'); }
  get age() { return this.form.get('age'); }

  ngOnInit() {
    this.BMR = 0;
    this.RI = 0;
  }

  calcBMR(): void {

    this.BMR = ( 10 * this.weight.value ) + ( 6.25 * this.height.value ) - ( 5 * this.age.value );
    switch (this.gender.value) {
      case 'M':
        this.BMR += 5;
        break;
      case 'F':
        this.BMR -= 161;
        break;
    }

    this.calcRI();

  }

  calcRI(): void {
    switch (this.activityLevel.value) {
      case '1':
        this.RI = this.BMR * 1.2; 
        break;
      case '2':
        this.RI = this.BMR * 1.375; 
        break;
      case '3':
        this.RI = this.BMR * 1.55; 
        break;
      case '4':
        this.RI = this.BMR * 1.725; 
        break;
      case '5':
        this.RI = this.BMR * 1.9; 
        break;
    }
  }


}

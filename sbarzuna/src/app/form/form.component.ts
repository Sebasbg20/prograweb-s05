import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userData = {
    name: '',
    lastname: '',
    email: '',
  };

onSubmit() {
  console.log(this.userData)
  }


onContinue() {
  
}
}

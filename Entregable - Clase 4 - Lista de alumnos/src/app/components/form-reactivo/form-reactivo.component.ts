import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css'],
})
export class FormReactivoComponent {
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  lastNameControl = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });

  onSubmit() {
    console.log(this.loginForm.value)
  }
}

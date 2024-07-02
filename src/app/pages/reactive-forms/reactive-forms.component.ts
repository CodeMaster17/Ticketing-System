import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  regForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.regForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {
    // 1st way of creating instance of FormGroup class
    // this.regForm = new FormGroup({
    //   fname: new FormControl(''),
    //   lname: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    // });

    // 2nd way
    // this.regForm = this._fb.group({
    //   fname: new FormControl(''),
    //   lname: new FormControl(''),
    //   email: new FormControl('example@mail.com'),
    //   password: new FormControl('******'),
    // });

    // 3rd way
    this.regForm = this._fb.group({
      // Validations should always be at index 1, therefore it is added in single array
      // Validators.compose is added, so that Angular executes it as single entity
      fname: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  register(formData: FormGroup) {
    // console.log(formData);

    // 2nd way of getting values
    console.log(this.regForm);
    console.log(this.regForm.value);
  }
}

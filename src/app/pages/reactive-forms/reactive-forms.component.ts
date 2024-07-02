import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    this.regForm = this._fb.group({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl('example@mail.com'),
      password: new FormControl('******'),
    });

    // 3rd way
    this.regForm = this._fb.group({
      fname: [],
      lname: [],
      email: [],
      password: [],
    });
  }

  register(formData: FormGroup) {
    // console.log(formData);

    // 2nd way of getting values
    console.log(this.regForm);
    console.log(this.regForm.value);
  }
}

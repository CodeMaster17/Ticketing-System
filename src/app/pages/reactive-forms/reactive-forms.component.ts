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

    // tracking the changes in the value in the input field
    // this.regForm.get('fname')?.valueChanges.subscribe((firstname) => {
    //   console.log('fname value', firstname);
    // });
    // this.regForm.get('lname')?.valueChanges.subscribe((lastname) => {
    //   console.log('lname value', lastname);
    // });

    // appliying value change to whole form
    // this.regForm.valueChanges.subscribe((FormData) => {
    //   console.log('first name', FormData.fname);
    //   console.log('lname name', FormData.lname);
    // });

    // status changes
    // this.regForm.get('fname')?.statusChanges.subscribe((firstnamestatus) => {
    //   console.log('fname status', firstnamestatus);
    // });

    // for whole form
    this.regForm.statusChanges.subscribe((formstatus) => {
      console.log(formstatus);
    });
  }

  register(formData: FormGroup) {
    // console.log(formData);

    // 2nd way of getting values
    console.log(this.regForm);
    console.log(this.regForm.value);
    // console.log(this.regForm.get('fname').value);
    const emailControl = this.regForm.get('email');
    if (emailControl) {
      // Log the email control's value if it exists
      console.log(emailControl.value);
    } else {
      // Handle the case where the email control is not found
      console.error('Email control is not found');
    }
  }

  reset() {
    this.regForm.reset({
      fname: 'Chandan',
    });
  }

  fillData() {
    this.regForm.setValue({
      fname: 'Hitanshi',
      lname: 'singh',
      email: 'moti@gmail.com',
    });
  }
  setData() {
    this.regForm.patchValue({
      lname: 'singh',
      email: 'moti@gmail.com',
    });
  }
}

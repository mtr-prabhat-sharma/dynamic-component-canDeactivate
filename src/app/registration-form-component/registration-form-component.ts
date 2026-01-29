import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form-component',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration-form-component.html',
  styleUrl: './registration-form-component.scss',
})
export class RegistrationFormComponent implements OnInit{
  userRegistrationForm: FormGroup = new FormGroup({});
  newUserName: string = '';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userRegistrationForm = this.fb.group({
      userName: ['',Validators.required],
      contactNumber: ['',Validators.required]

    })
  }
  onSubmit(){
    console.log("onSubmit", this.userRegistrationForm.value);
    this.newUserName = this.userRegistrationForm.value.userName;
  }
}

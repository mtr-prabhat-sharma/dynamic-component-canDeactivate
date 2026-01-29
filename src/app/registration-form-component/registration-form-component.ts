import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../shared-service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registration-form-component',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration-form-component.html',
  styleUrl: './registration-form-component.scss',
})
export class RegistrationFormComponent implements OnInit{
  userRegistrationForm: FormGroup = new FormGroup({});
  newUserName: string = '';
  isSubmitted = false;
  constructor(private fb: FormBuilder, private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.userRegistrationForm = this.fb.group({
      userName: ['',Validators.required],
      contactNumber: ['',Validators.required]

    })
  }

  onSubmit(){
    this.isSubmitted = true;
    console.log("onSubmit", this.userRegistrationForm.value);
    this.newUserName = this.userRegistrationForm.value.userName;
    this.sharedService.sendUserInfo(this.userRegistrationForm.value);
    
  }

  sendUserData(){
    this.router.navigateByUrl('/userInfo')
  }

  loadUserInfo() {

  }
  
  canDeactivate(){
    if(!this.isSubmitted){
      return confirm("'You have unsaved changes. Are you sure you want to leave this page?'")
    }
    return true;
  }
}

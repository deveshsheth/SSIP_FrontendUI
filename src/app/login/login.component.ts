import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private rut:Router) { }

  ngOnInit(): void {
  
    this.signinForm = new FormGroup({
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  
  }
  submit(){
    if(this.signinForm.valid){
      console.log(this.signinForm.value);
      this.rut.navigateByUrl('/dashboard')
    }
    
  }

}

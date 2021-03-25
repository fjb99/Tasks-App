import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {
  }

  registerForm = this.fb.group({
    email: '',
    password: '',
    confirmPassword: ''
  });

  ngOnInit(): void {
  }

}

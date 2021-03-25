import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error?: string;

  loginForm = this.fb.group({
    email: '',
    password: ''
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  async handleLogin(): Promise<void> {
    const { email, password } = this.loginForm.value;
    const result = await this.auth.login(email, password);
    if (typeof result === 'string') {
      this.error = result;
    }
  }

}

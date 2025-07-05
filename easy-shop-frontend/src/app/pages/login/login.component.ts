import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import {AuthLoginRequest} from '../../core/interfaces/auth-login.request';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message?: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  onSubmit() {
    this.message = undefined;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return this.message;
    }

    let authLogin: AuthLoginRequest = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.doLogin(authLogin).subscribe({
      next: (data) => {
        // login succeded
        this.loginSucceded(data.token);
      },
      error: (err) => {
        // error catch
        this.message = err.error.message;
      }
    });
  }

  loginSucceded(token: string) {
    localStorage.setItem('token', token);
    void this.router.navigate(['/home']);
  }
}


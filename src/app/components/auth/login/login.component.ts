import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormResponse } from 'src/app/models/form-response';
import { LoginForm } from 'src/app/models/login-form';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginForm();
  fResponse = new FormResponse();

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.authenticate(this.loginForm).toPromise()
    .then(res => {
      this.fResponse.setMessage('Authenticated succeed.');
      localStorage.setItem('token', res.toString())
      this.router.navigate(['/users']);
    })
    .catch(err => this.fResponse.setError(err.error.error))
  }

}

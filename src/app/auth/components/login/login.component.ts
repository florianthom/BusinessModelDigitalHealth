import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '@app/core/services/authorization.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authentication: AuthorizationService)
  {

  }

  ngOnInit() {
    this.createForm();
  }



  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.minLength(5),
        Validators.required]]
    });
  }

  login()
  {
    this.authentication
        .loginUser(this.loginForm.get('email').value, this.loginForm.get('password').value)
        .subscribe(
            res =>
              {
                this.router.navigate(["/home"]);
              },
            error =>
              {
              this.loginForm.get('password').reset();
              }
        );
  }
}
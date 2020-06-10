import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserGqlService } from '@app/core/services/user-gql.service';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '@app/core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  private sub: Subscription;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserGqlService, private auth: AuthorizationService)
  {

  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy(): void {
    if (this.sub) { this.sub.unsubscribe(); }
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.minLength(5),
        Validators.required]]
    });
    // Validators.pattern('\'^(?=.*[A-Z])(?=.*[a-z])(?=.*\\\\d)[A-Za-z\\\\d!$%@#£€*?&]{8,}$\'')
  }

  login()
  {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.sub = this.userService.loginUser(email, password).subscribe(res => {
      this.auth.setAuthorization(res.token);

    console.log("\n\n\n\n Token: " + res.token +  "\n\n\n\n");


      console.log("\n\n Successful auth \n\n")
      this.router.navigate(["/home"]);
    }, error => {
      this.loginForm.get('password').reset();
    });
  }
  
}
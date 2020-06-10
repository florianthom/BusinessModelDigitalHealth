import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidatorService } from '@app/auth/services/password-validator.service';
import { EmailValidatorService } from '@app/auth/services/email-validator.service';
import { UserGqlService } from '@app/core/services/user-gql.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {

  
  registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private pvs: PasswordValidatorService, private evs: EmailValidatorService, private userService: UserGqlService)
  {

  }

  ngOnInit() {
    this.createForm();
  }




  private createForm() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], [this.evs]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(5)]],
        passwordRepeat: ''
      }, { validators: [this.pvs.passwordEquality]})
    });
    // Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$');
  }

  registrate() {
    const firstname = this.registerForm.get('firstname').value;
    const lastname = this.registerForm.get('lastname').value;
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('passwords').get('password').value;
    this.userService.registerUser(firstname, lastname, email,password);
    alert('Prüfen Sie ihre Emails!'); // provisorisch
    this.registerForm.reset();
    this.router.navigate(["/home"]);
  }
}
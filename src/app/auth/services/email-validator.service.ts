import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { CheckEmailGQL } from '@app/graphql/generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private checkEmail: CheckEmailGQL) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.checkEmail.fetch({email: control.value}).pipe(map(res => !res.data.checkEmailAddress ? null : {
      emailExists: { valid: false }
    }));
  }
}

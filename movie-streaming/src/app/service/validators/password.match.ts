import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function
export function passwordMatchValidator(): ValidatorFn{
  return (control:AbstractControl) : ValidationErrors | null => {
    const pass = control.get('password')?.value;
    const value = control.value;
    console.log(pass);

    if (!value) {
      return null;
    }

    return pass == value ? {noMisMatch:true} : null;
  }
}

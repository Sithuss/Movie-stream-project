import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-backage',
  templateUrl: './buy-backage.component.html',
  styleUrls: ['./buy-backage.component.css']
})
export class BuyBackageComponent {

  packageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.packageForm = this.formBuilder.group({
      package: ['', Validators.required]
    });
   }


  submitForm() {
    if (this.packageForm.valid) {
      console.log(this.packageForm.value);

    } else {
      console.log('Form is invalid');
    }
  }

}

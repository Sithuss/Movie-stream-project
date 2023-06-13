import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-backage',
  templateUrl: './buy-backage.component.html',
  styleUrls: ['./buy-backage.component.css']
})
export class BuyBackageComponent {

  packageForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
    this.packageForm = this.formBuilder.group({
      package: ['', Validators.required],
      quantity: [1],
      paymentMethod: [''],
      transaction: ['', Validators.required]
    });
   }


  submitForm() {
    
      console.log(this.packageForm.value);
      this.router.navigate(['user/watch']);

  }

}

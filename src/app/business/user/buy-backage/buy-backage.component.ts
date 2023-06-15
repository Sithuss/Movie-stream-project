import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-buy-backage',
  templateUrl: './buy-backage.component.html',
  styleUrls: ['./buy-backage.component.css']
})
export class BuyBackageComponent {

  packageForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private userService:UserService) {
    this.packageForm = this.formBuilder.group({
      package: ['', Validators.required],
      quantity: [1],
      paymentMethod: [''],
      transaction: ['', Validators.required]
    });
   }

   buypackage() {
    if(this.packageForm.valid) {
      let pkQuantity = this.packageForm.get('quantity')?.value;
      this.userService.validatedUser.quantity = pkQuantity;
      console.log("Package Quantity: ", pkQuantity);
    }

    console.log(this.packageForm.value);
    this.router.navigate(['/user/watch']);

   }


  // submitForm() {

  //     console.log(this.packageForm.value);
  //     this.router.navigate(['/user/watch']);

  // }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyPackageService } from 'src/app/service/apis/buypackage.service';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';
import { PaymentService } from 'src/app/service/payment.service';
import { Payment } from 'src/app/service/dto/payment';

@Component({
  selector: 'app-buy-backage',
  templateUrl: './buy-backage.component.html',
  styleUrls: ['./buy-backage.component.css']
})
export class BuyBackageComponent {


  errorMessage!:string;

  packageForm: FormGroup;

  payment$: Payment[] = []

  constructor(private formBuilder: FormBuilder,
    private router: Router, private userService:UserService,
    private pkCount:BuyPackageService, private location:Location,
    public paymentService:PaymentService) {
    this.packageForm = this.formBuilder.group({
      package: ['', Validators.required],
      quantity: [1],
      paymentMethod: [''],
      transaction: ['', Validators.required]
    });
    paymentService.getAll().subscribe(
      p => this.payment$ = p
    )
   }

   buypackage() {

    console.log(this.packageForm.value);

    this.pkCount.buy(this.packageForm.value).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => this.errorMessage = 'Invalid Purchase',
        complete: () => this.goBack()
      }
    )


   }

   goBack() {
    this.location.back();
  }


  // submitForm() {

  //     console.log(this.packageForm.value);
  //     this.router.navigate(['/user/watch']);

  // }

}

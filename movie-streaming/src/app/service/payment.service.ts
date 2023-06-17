import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Payment } from './dto/payment';
import { Category } from './dto/movie-category';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentList:Payment[] = [
    {name: 'KBZ PAY'},
    {name: 'WAVE PAY'},
    {name: 'AYA PAY'}
  ];

  getAll():Observable<Payment[]> {
    return of(this.paymentList);
  }
}

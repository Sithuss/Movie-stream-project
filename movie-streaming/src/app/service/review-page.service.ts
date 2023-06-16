import { Injectable } from '@angular/core';
import { Review } from './dto/review';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ReviewPageService {

  constructor(){}

  private formList:Review[] = [
    {id: 1, review:"This site is not bad.I hope more latest movies."},
    {id: 2, review:"I waiting for new episodes."}
  ]

  findAllReviews():Observable<Review[]> {
    console.log(this.formList)
    return of(this.formList);
  }

  createReview(reviewForm:Review){
    this.formList.push(reviewForm);
  }
}

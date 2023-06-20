import { Injectable } from '@angular/core';
import { Review } from '../dto/review';
import { Observable, of } from 'rxjs';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

const USER_DOMAIN = `${environment.baseUrl}/user/movie`

@Injectable({
  providedIn: 'any',
})
export class ReviewPageService {

  constructor(private http:HttpClient){}

  private formList:Review[] = [
    {id: 1, review:"This site is not bad.I hope more latest movies."},
    {id: 2, review:"I waiting for new episodes."}
  ]

  findAllReviews():Observable<Review[]> {
    console.log(this.formList)
    return of(this.formList);
  }

  createReview(reviewForm:Review){
    console.log("nani 2");
    this.formList.push(reviewForm);
  }

  movieReview(review: any, id: number) {
    this.http.post(`${USER_DOMAIN}/review?id=${id}`, review)
  }




}

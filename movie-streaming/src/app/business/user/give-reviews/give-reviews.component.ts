import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review } from 'src/app/service/dto/review';
import { ReviewPageService } from 'src/app/service/apis/review-page.service';
import { Movie } from '../../uploader/model/movie';

@Component({
  selector: 'app-give-reviews',
  templateUrl: './give-reviews.component.html',
  styleUrls: ['./give-reviews.component.css'],
})
export class GiveReviewsComponent implements OnInit {
  reviewForm: FormGroup;

  otherReview!: Observable<Review>;

  reviewList: BehaviorSubject<Review[]> = new BehaviorSubject<Review[]>([]);
  reviewList$: Observable<Review[]> = this.reviewList.asObservable();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ReviewPageService
  ) {
    this.reviewForm = fb.group({
      id: 3,
      review: '',
    });
  }
  ngOnInit(): void {
    this.service.findAllReviews().subscribe((m) => {
      this.reviewList.next(m);
    });
  }

  addReview() {
    this.service.createReview(this.reviewForm.value);
    this.router.navigate(['/user/give-reviews']);
  }
}

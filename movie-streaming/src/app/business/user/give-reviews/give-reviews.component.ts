import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review } from 'src/app/service/dto/review';
import { ReviewPageService } from 'src/app/service/apis/review-page.service';
import { Movie } from '../../uploader/model/movie';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-give-reviews',
  templateUrl: './give-reviews.component.html',
  styleUrls: ['./give-reviews.component.css'],
})
export class GiveReviewsComponent implements OnInit {
  reviewForm: FormGroup;

  otherReview!: any;

  movie: any;

  reviewList: BehaviorSubject<Review[]> = new BehaviorSubject<Review[]>([]);
  reviewList$: Observable<Review[]> = this.reviewList.asObservable();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ReviewPageService,
    public userService: UserService
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

  addReview(r : Review) {
    this.service.createReview(r);
     this.router.navigate(['/user/give-reviews','movie.id']);
  }
}

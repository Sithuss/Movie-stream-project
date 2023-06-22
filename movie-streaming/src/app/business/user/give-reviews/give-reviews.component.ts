import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Review } from 'src/app/service/dto/review';
import { ReviewPageService } from 'src/app/service/apis/review-page.service';
import { Movie } from '../../uploader/model/movie';
import { UserService } from 'src/app/service/user.service';
import { UserMovieService } from 'src/app/service/apis/user.movie.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserTestService } from '../../../service/user-test.service';


@Component({
  selector: 'app-give-reviews',
  templateUrl: './give-reviews.component.html',
  styleUrls: ['./give-reviews.component.css'],
})
export class GiveReviewsComponent implements OnInit {
  reviewForm: FormGroup;

  otherReview!: any;

  user: any;

  movie:any;


  reviewList: BehaviorSubject<Review[]> = new BehaviorSubject<Review[]>([]);
  reviewList$: Observable<Review[]> = this.reviewList.asObservable();

  constructor(
    public movieService:UserMovieService,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: ReviewPageService,
    public userService: UserService,
    public userTestService: UserTestService,
    private filter:DomSanitizer
  ) {
    this.reviewForm = fb.group({
      id: 3,
      review: '',
    });

    const id = this.route.snapshot.paramMap.get('id') as string;
    this.movieService.findById(+id).subscribe(result => this.movie = result)
    // this.filter.bypassSecurityTrustResourceUrl(this.movie);
    this.userTestService.findUserById(+id).subscribe(result => this.user = result)

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

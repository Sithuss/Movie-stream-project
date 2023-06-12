import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { BuyBackageComponent } from './buy-backage/buy-backage.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GiveReviewsComponent } from './give-reviews/give-reviews.component';
import { SignInComponent } from 'src/app/common/pages/sign-in/sign-in.component';
import { UserAccountComponent } from 'src/app/common/pages/user-account/user-account.component';
import { EditAccountComponent } from 'src/app/common/pages/edit-account/edit-account.component';


@NgModule({
  declarations: [
    UserComponent,
    WatchMovieComponent,
    BuyBackageComponent,
    UserHomeComponent,
    MovieDetailsComponent,
    GiveReviewsComponent,
    SignInComponent,
    UserAccountComponent,
    EditAccountComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

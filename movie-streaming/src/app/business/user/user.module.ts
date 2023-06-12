import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { BuyBackageComponent } from './buy-backage/buy-backage.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GiveReviewsComponent } from './give-reviews/give-reviews.component';
import { UserAccountComponent } from 'src/app/common/pages/user-account/user-account.component';
import { EditAccountComponent } from 'src/app/business/user/edit-account/edit-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    UserComponent,
    WatchMovieComponent,
    BuyBackageComponent,
    UserHomeComponent,
    MovieDetailsComponent,
    GiveReviewsComponent,
    UserAccountComponent,
    EditAccountComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }

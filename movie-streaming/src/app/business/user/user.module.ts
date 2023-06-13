import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { BuyBackageComponent } from './buy-backage/buy-backage.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GiveReviewsComponent } from './give-reviews/give-reviews.component';
import { UserAccountComponent } from 'src/app/common/pages/user-account/user-account.component';
import { EditAccountComponent } from 'src/app/business/user/edit-account/edit-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WidgetsModule } from 'src/app/common/widgets/widgets.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    UserComponent,
    WatchMovieComponent,
    BuyBackageComponent,
    MovieDetailsComponent,
    GiveReviewsComponent,
    EditAccountComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsModule
  ]
})
export class UserModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { BuyBackageComponent } from './buy-backage/buy-backage.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GiveReviewsComponent } from './give-reviews/give-reviews.component';
import { UserAccountComponent } from 'src/app/common/pages/user-account/user-account.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path:'',component:UserComponent, children:[
    {path:'movie-details/:id', component:MovieDetailsComponent},
    {path:'give-reviews', component:GiveReviewsComponent},
    {path:'watch', component:WatchMovieComponent},
    {path:'buy', component:BuyBackageComponent},
    {path:'sign-up', component:SignUpComponent},
    {path:'sign-in', component:SignInComponent},
    {path:'edit-acc', component:EditAccountComponent},
    {path:'account', component:UserAccountComponent},
    {path:'movie-list', component:MovieListComponent},
    {path:'', redirectTo:'/user/movie-list', pathMatch:'prefix'}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

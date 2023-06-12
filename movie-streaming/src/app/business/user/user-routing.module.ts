
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { BuyBackageComponent } from './buy-backage/buy-backage.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GiveReviewsComponent } from './give-reviews/give-reviews.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SignUpComponent } from 'src/app/common/pages/sign-up/sign-up.component';
import { UserAccountComponent } from 'src/app/common/pages/user-account/user-account.component';

const routes: Routes = [
  {path:'',component:UserComponent, children:[
    {path:'movie-details', component:MovieDetailsComponent},
    {path:'give-reviews', component:GiveReviewsComponent},
    {path:'user-home',component:UserHomeComponent},
    {path:'watch', component:WatchMovieComponent},
    {path:'buy', component:BuyBackageComponent},
    {path:'sign-up', component:SignUpComponent},
    {path:'account', component:UserAccountComponent},
    {path:'', redirectTo:'/user', pathMatch:'full'}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

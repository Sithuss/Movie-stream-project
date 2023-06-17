import { Observable, of } from 'rxjs';
import { Category } from './dto/movie-category';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'any'
})

export class CategoryService{
  constructor(){}

  private categoryList:Category[] = [
    { name:"war"},
    { name:"action"},
    { name:"romance"},
    { name:"comedy"},
    { name:"horror"},
    { name:"thriller"},
    { name:"sci-fi"},
    { name:"animation"},
    { name:"adventure"},
    { name:"biography"},
    { name:"historical"},
    { name:"bollywood"},
    { name:"hollywood"},
    { name:"sport"},
    { name:"suspense"}
  ]

  findAllCate():Observable<Category[]> {
    return of(this.categoryList);
  }
}

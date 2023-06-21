import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/business/uploader/model/movie';
import { environment } from 'src/app/environments/environment';
import { ApiStatus } from '../dto/api.result';

const UPLOADER_DOMAIN = `${environment.baseUrl}/uploader/movie`;

@Injectable({
  providedIn: 'root'
})
export class UploaderMovieService {

  constructor(private http:HttpClient) { }

  upload(movie: Movie):Observable<any> {
    return this.http.post(`${UPLOADER_DOMAIN}/upload`, movie);
  }

  uploadHistory(id: number):Observable<Movie[]> {
    return this.http.get<Movie[]>(`${UPLOADER_DOMAIN}/uploadHistory?id=${id}`);
  }

  uploaderDeleteMovie(id:number):Observable<ApiStatus> {
    return this.http.delete<any>(`${UPLOADER_DOMAIN}/delete?id=${id}`);
  }

  uploaderEditMovie(movie:any):Observable<any> {
    return this.http.post<any>(`${UPLOADER_DOMAIN}/edit`, movie);
  }


}

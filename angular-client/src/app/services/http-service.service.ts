import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const api = '';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private page: number = 0;
  private movie: any;

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<any> {
    this.page = this.page + 1;
    console.log(this.page)
    return this.http.get(`${api}/api/movie?page=${this.page}`);
  }

  public getMovie(id): Observable<any> {
    return this.http.get(`${api}/api/movie/${id}`);
  }

  public updateMovie(id, movie): Observable<any> {
    return this.http.put(`${api}/api/movie/${id}`, movie);
  }

  public updateRating(id, rating): Observable<any> {
    return this.http.put(`${api}/api/movie/rating/${id}`, rating);
  }

  public searchMovie(movie): Observable<any> {
    return this.http.get(`${api}/api/movie/search?movie=${movie}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AppDataService]
})
export class HomeComponent implements OnInit {
  private movies: any[] = [];
  private query: any;
  public httpReqestInProgress: boolean = false;

  constructor(private DataService: AppDataService) { }

  ngOnInit() {
    this.DataService.getMovies().subscribe(data => {
      data.docs.forEach(item => this.movies.push(item));
    });
  }

  public onScrollDown() {
    if (this.httpReqestInProgress) return;
    this.httpReqestInProgress = true;

    this.DataService.getMovies().subscribe(data => {
      data.docs.forEach(item => this.movies.push(item));
      this.httpReqestInProgress = false;
    });
  }

  public onScrollUp() {
  }

  public updateRating(id, rating, votes) {
    const updatedRating = {
      imdb: {
        rating: rating + 0.1,
        votes: votes + 1,
      },
    };
    this.DataService.updateRating(id, updatedRating).subscribe(data => {
      this.movies.map(movie => {
        if (movie._id === id) {
          movie.imdb.rating = rating + 0.1;
          movie.imdb.votes = votes + 1;
          return movie;
        }
        return movie;
      });
    });
  }

  public searchMovie() {
    this.DataService.searchMovie(this.query).subscribe(data => {
      this.movies = [];
      data.forEach(item => this.movies.push(item));
      this.httpReqestInProgress = true;
    });
  }

  public searchCheck() {
    console.log(this.query)
    this.query = '';

    this.httpReqestInProgress = false;

    this.DataService.getMovies().subscribe(data => {
      this.movies = [];
      data.docs.forEach(item => this.movies.push(item));
    });
  }

}

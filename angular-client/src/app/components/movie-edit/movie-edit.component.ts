import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../services/http-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss'],
  providers: [AppDataService]
})
export class MovieEditComponent implements OnInit {
  private id: any;
  private movie: any;
  private title: string = '';
  private fullplot: string = '';
  private runtime: string = '';
  private genre: string = '';
  constructor(
    private DataService: AppDataService,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log('editId', this.id)
    this.DataService.getMovie(this.id).subscribe(movie => {
      //data.docs.forEach(item => this.books.push(item));
      this.movie = movie;
      this.title = movie.title;
      this.fullplot = movie.fullplot;
      this.runtime = movie.runtime;
      this.genre = movie.genres && movie.genres[0];
    });
  }

  backClicked() {
    this._location.back();
  }

  update() {
    const movie = {
      title: this.title,
      fullplot: this.fullplot,
      runtime: this.runtime,
      genres: [this.genre],
    };

    this.DataService.updateMovie(this.id, movie).subscribe(movie => {
      this._location.back();
    })
  }

}

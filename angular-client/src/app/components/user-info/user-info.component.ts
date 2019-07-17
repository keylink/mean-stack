import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../services/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [AppDataService]
})
export class UserInfoComponent implements OnInit {
  private id: any;
  private movie: any;
  constructor(
    private DataService: AppDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // this.DataService.getMovie(this.id).subscribe(movie => {
    //   //data.docs.forEach(item => this.books.push(item));
    //   this.movie = movie;
    // });
  }

}

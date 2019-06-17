import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../services/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [AppDataService]
})
export class BookComponent implements OnInit {
  book: any;
  id: any;
  constructor(
    private DataService: AppDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.DataService.getJSON().subscribe(data => {
      const dataBook = data.data.filter(book => book.id === this.id);
      if (dataBook.length > 0) {
        this.book = dataBook[0];
      }
    });
  }
}

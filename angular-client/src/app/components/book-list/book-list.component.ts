import { Component, OnInit } from '@angular/core';

import { AppDataService } from '../../services/http-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [AppDataService]
})
export class BookListComponent implements OnInit {
  books: any;
  query: any;
  constructor(private DataService: AppDataService) { }

  ngOnInit() {
    this.DataService.getJSON().subscribe(data => {
      this.books = data;
    });
  }

}

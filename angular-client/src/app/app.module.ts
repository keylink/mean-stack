import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppDataService } from './services/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookComponent } from './components/book/book.component';

import { SearchFilterPipe } from './components/book-list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookListComponent,
    NavbarComponent,
    BookComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

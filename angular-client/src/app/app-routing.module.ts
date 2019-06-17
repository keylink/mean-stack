import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'book', component: BookListComponent},
  {path: 'book/:id', component: BookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

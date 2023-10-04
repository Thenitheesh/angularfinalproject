import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { SearchComponent } from './search/search.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';

const routes: Routes = [
  { path: 'book/details/:id', component: BookdetailComponent},
  { path: '', component: BooksComponent, pathMatch: 'full' },
  { path: 'book', component: BooksComponent, pathMatch: 'full' },
  { path: 'book/:category', component: SearchComponent, pathMatch: 'full' },
  { path: 'newbook', component: AddbookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

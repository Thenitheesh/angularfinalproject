import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'book', component: BooksComponent, pathMatch: 'full' },
  { path: 'book/:category', component: SearchComponent, pathMatch: 'full' },
  { path: 'newbook', component: AddbookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

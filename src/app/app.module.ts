import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxStarRatingModule } from 'ngx-star-rating-latest';

import { HttpClientModule } from '@angular/common/http';
import { AddbookComponent } from './addbook/addbook.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [AppComponent, BooksComponent, BookComponent, AddbookComponent, SearchComponent, SearchbookComponent, BookdetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    NgxStarRatingModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,InfiniteScrollModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

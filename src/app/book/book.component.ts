import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AppComponent,Book } from '../app.component';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input()  book:any={
    name:'hi'
  };

}

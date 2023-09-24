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
  clr=""
  getRandomColor = () =>{
   
    this.clr=`#${Math.floor(Math.random() * 16777215).toString(16)}40`;
    console.log(this.clr)
    return this.clr
  }

  color=`background: linear-gradient(` +this.getRandomColor() +`, rgba(0, 0, 0, 0));`
  
}

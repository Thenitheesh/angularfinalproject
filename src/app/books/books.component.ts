import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../app.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  constructor(private bookservice:BookService){}
  // book:Book={
  //   name:"nitheeh biograpy",
  //   author:"nitheesh"

  // }
  books:any[]=[]
  newbooks:any[]=[]
  currentpage=1
//   helo(){
// this.bookservice.getbooks().subscribe()
// }
page=1
ngOnInit(){

  this.getdata(this.currentpage);
}
  getdata(page:number) {
    this.bookservice.getdata(page).subscribe(data=> {
      this.books = [...this.books,...data]
console.log(this.books)
    });
  }

  onScroll(){
this.currentpage++
// this.getdata(this.currentpage)
}

}

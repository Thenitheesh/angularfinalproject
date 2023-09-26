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
ngOnInit(){
    this.bookservice.getdata(this.currentpage).subscribe(data=> {
      this.books = data
console.log(this.books)
    });
  }
  isLoading=false
  onLoadingChange(isLoading: boolean): void {
    this.isLoading = isLoading;
  }

  onScroll(){
this.currentpage++
this.onLoadingChange(true)
this.bookservice.getdata(this.currentpage).subscribe(data=> {
  this.books.push(...data)
// console.log(data)
this.onLoadingChange(false)
});
}

}

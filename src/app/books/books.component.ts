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
//   helo(){
// this.bookservice.getbooks().subscribe()
// }
ngOnInit(){

  this.bookservice.getdata().subscribe(data => {
    this.books=data.results
    console.log(this.books,"nith")
  // this.books=data.map((e:any)=>{
  //  return {name:e.results[0].series_name}
  // })  
  
  })
}
}

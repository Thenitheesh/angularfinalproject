import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  booking:any[]=[]
category: string=""

constructor(private bookservice:BookService,private route:ActivatedRoute){

const {category}=this.route.snapshot.params
this.category=category
}
  ngOnInit(){

    this.bookservice.getdatabycategory(this.category).subscribe(data => {
      this.booking=data.items
      // console.log(this.books)
      console.log(this.booking)
    // this.books=data.map((e:any)=>{
    //  return {name:e.results[0].series_name}
    // })  
    
    })
  }
}

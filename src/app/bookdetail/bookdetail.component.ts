import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent {
book:any=""
  itemid
constructor(private route:ActivatedRoute,private bookservice:BookService){
const {id}=this.route.snapshot.params
this.itemid=id
}
ngOnInit() {
  this.bookservice.getbookfromapibyid(this.itemid).subscribe((mv) => {
    this.book = mv;
  });
}
}

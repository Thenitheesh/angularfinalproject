import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  bookForm = this.fb.group({
    title:"",
    author:'',
    genre:"",
    publishedYear:"",
    description:"",
    bestselling:"",
    coverImageUrl:""
  });
  constructor(
    private bookservice: BookService,
    private fb: FormBuilder,
    private router: Router,
    private routedata: ActivatedRoute
  ) {
    // this.moviesList = this.movieService.getmovie();
  }
  addbook(){}
}

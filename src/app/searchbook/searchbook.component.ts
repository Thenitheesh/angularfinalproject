import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent {
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

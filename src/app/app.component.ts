import { Component } from '@angular/core';
export type Book={
  name:string;
  author:string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Nitheesh';
}

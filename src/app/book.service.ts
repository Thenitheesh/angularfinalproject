import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com',
    'X-RapidAPI-Key': '488efd7d64mshbd85d87721d6a22p118a7ajsnfe2ab41fc9b3',
  });

  getdata(pageNumber:number) {
    return this.http.get<any>(
      `https://64f6f4189d7754084952d867.mockapi.io/users?p=${pageNumber}&l=12`,
    );
  }
  getdatabycategory(category:string) {
    return this.http.get<any>(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=AIzaSyDTk2SF4sfPtSuAaf7fxdmjr6Z9rD9SlNo`,

    );
  }
  setmoviefromapi(newbook:any){
    return this.http.post(
      `https://64f6f4189d7754084952d867.mockapi.io/users/`,newbook
    );
  }
  getbookfromapibyid(id:string){
    return this.http.get(
      `https://64f6f4189d7754084952d867.mockapi.io/users/${id}`
    );
  }
  
}

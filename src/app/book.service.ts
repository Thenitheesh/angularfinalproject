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
  // getmoviefromapi(){
  //   return this.http.get<Movie[]>(
  //     'https://64f6f4189d7754084952d867.mockapi.io/movies'
  //   );
  // }
  // getmoviefromapibyid(id:string){
  //   return this.http.get<Movie>(
  //     `https://64f6f4189d7754084952d867.mockapi.io/movies/${id}`
  //   );
  // }
  // setmoviefromapi(newMovie:Movie){
  //   return this.http.post(
  //     `https://64f6f4189d7754084952d867.mockapi.io/movies/`,newMovie
  //   );
  // }
  // setmovie(newMovie:Movie){
  //   this.moviesList.push(newMovie)
  // }
  // updateMovie( i:number, j:number,newMovie:Movie){
  //   this.moviesList.splice(i,j,newMovie)
  // }
  // updatemoviefromapi(id:string,editmovie:Movie){
  //   return this.http.put(`https://64f6f4189d7754084952d867.mockapi.io/movies/${id}`,editmovie)
  // }
  
  // deletemoviefromapi(id:string){
  //  return this.http.delete(`https://64f6f4189d7754084952d867.mockapi.io/movies/${id}`)
    
  // }
}

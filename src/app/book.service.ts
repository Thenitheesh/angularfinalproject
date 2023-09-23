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

  getdata() {
    return this.http.get<any>(
      'https://book-finder1.p.rapidapi.com/api/search?results_per_page=25&page=127',
      { headers: this.headers }
    );
  }
}

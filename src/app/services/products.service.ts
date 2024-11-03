import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private getProducts = 'assets/jsons/books.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.getProducts);
  }
}

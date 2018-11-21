import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient) { }

  configUrl = 'http://localhost:5000/api/category';
  
  
  getCategoryList(): Observable<HttpResponse<Category>> {
    return this.http.get<Category>(
      this.configUrl, { observe: 'response' });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Post } from './../models/Post';
import { Observable } from 'rxjs/';
import { CategoryWithPosts } from '../models/CategoryWithPosts';

@Injectable({
  providedIn: 'root'
})

export class PostService {

constructor( private http: HttpClient) { }

configUrl = 'http://localhost:5000/api';


getPostList(): Observable<HttpResponse<Post>> {
  return this.http.get<Post>(
    this.configUrl + '/post', { observe: 'response' });
}

getPostListByCategory(id): Observable<HttpResponse<CategoryWithPosts>> {

  return this.http.get<CategoryWithPosts>(
    this.configUrl + '/category/details/' + id, { observe: 'response' });
}
}

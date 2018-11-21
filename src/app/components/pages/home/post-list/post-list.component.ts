import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../../services/post.service';
import { Post } from './../../../../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 Posts : Post
  constructor(private postService: PostService) { }

  ngOnInit() {
 
   this.postService.getPostList()
   .subscribe(Response => { this.Posts = Response.body;});


  }

}

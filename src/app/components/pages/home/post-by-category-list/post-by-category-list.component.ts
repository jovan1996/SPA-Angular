import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PostService } from './../../../../services/post.service';
import { CategoryWithPosts } from 'src/app/models/CategoryWithPosts';
import { Pagination } from 'src/app/models/Pagination';

@Component({
  selector: 'app-post-by-category-list',
  templateUrl: './post-by-category-list.component.html',
  styleUrls: ['./post-by-category-list.component.css']
})
export class PostByCategoryListComponent implements OnInit, OnDestroy {
  CategoryPosts: CategoryWithPosts;
  subscription;
  pagination:Pagination;
  //zavrsiti paginaciju
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
    ) {  this.getPosts(this.route.snapshot.paramMap.get('id'))}

  ngOnInit() {
    this.subscription = this.router.events.subscribe(
      (event) => {
        if(event instanceof NavigationEnd) {
          let id = this.route.snapshot.paramMap.get('id');
          if(id) {
            this.getPosts(id);         
          }
        }
      }
    );
  }
  getPosts(id): void{  
    this.postService.getPostListByCategory(id)
    .subscribe(Response => { this.CategoryPosts = Response.body;
    })
   }   

  ngOnDestroy() { 
    if(this.subscription) {
      this.subscription.unsubcribe();
    }
  }

  
  
}

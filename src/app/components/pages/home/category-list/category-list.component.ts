import { Component, OnInit } from '@angular/core';
import { Category } from './../../../../models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  Categories : Category
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
 
   this.categoryService.getCategoryList()
   .subscribe(Response => { this.Categories = Response.body;});


  }


}

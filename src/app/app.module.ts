import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home/home.component';

import { PostService } from './services/post.service';
import { CategoryListComponent } from './components/pages/home/category-list/category-list.component';
import { PostListComponent } from './components/pages/home/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostByCategoryListComponent } from './components/pages/home/post-by-category-list/post-by-category-list.component';
import { CategoryService } from './services/category.service';
import {PaginationModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent, 
    CategoryListComponent,
    PostListComponent,
    PostByCategoryListComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot()
  ],
  providers: [PostService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

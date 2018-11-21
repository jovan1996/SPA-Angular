import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home/home.component';
import { PostListComponent } from './components/pages/home/post-list/post-list.component';
import { PostByCategoryListComponent } from './components/pages/home/post-by-category-list/post-by-category-list.component';


const routes: Routes = [
 
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },

  {
    path: 'home', 
    component: HomeComponent,
    children:[
      
      { path:"", component:PostListComponent},
      { path:"category/:id", component:PostByCategoryListComponent},

  ]
  }          
                
 // {path: '**', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

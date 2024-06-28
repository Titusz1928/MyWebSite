import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AboutEduComponent } from './about-card/about-edu/about-edu.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { AboutSkiComponent } from './about-card/about-ski/about-ski.component';
import { ProjectDetailComponent } from './projects-card/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',redirectTo:'/home',pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[{path:'education',component:AboutEduComponent},{path:'skills',component:AboutSkiComponent}]
  },
  {
    path:'about',
    component:AboutCardComponent
  },
  {
    path: 'home/project/:id', component: ProjectDetailComponent ,
  },
  {
    path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

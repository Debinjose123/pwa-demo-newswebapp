import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';

const routes: Routes = [
  {path:'',component:TopheadingsComponent},
  {path:'tech',component:TechnewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home/dashboard' , pathMatch:'full'},
  {path:'home', loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)},
  {path:'**', redirectTo:'home/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

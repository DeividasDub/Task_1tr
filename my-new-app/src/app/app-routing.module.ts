import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PradziaComponent } from './pradzia/pradzia.component';

const routes: Routes = [
  {path:'Pradzia', component: PradziaComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

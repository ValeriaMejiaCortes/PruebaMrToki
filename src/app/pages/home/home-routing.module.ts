import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPage } from '../products/products.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }

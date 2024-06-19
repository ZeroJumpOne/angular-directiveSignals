import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmProductsComponent } from './pages/frm-products/frm-products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'product', component: FrmProductsComponent},
      {path: '**',      redirectTo: 'product'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './product/product-container/product-container.component';
import { SaleContainerComponent } from './sale/sale-container/sale-container.component';
import { TrainerContainerComponent } from './trainer/trainer-container/trainer-container.component';

const routes: Routes = [
  {path:'', component:SaleContainerComponent},
  {path:'products', component:ProductContainerComponent},
  {path:'trainers', component:TrainerContainerComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

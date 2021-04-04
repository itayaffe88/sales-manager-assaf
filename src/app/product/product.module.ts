import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContainerComponent } from './product-container/product-container.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ProductContainerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[ProductContainerComponent]
})
export class ProductModule { }

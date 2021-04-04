import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleContainerComponent } from './sale-container/sale-container.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [SaleContainerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[SaleContainerComponent]
})
export class SaleModule { }

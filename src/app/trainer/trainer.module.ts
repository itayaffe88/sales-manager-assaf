import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerContainerComponent } from './trainer-container/trainer-container.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TrainerService } from './trainer.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [TrainerContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],
  providers:[TrainerService],
  exports:[TrainerContainerComponent]
})
export class TrainerModule { }

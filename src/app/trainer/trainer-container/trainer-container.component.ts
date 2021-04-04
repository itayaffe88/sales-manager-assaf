import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../models';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-container',
  templateUrl: './trainer-container.component.html',
  styleUrls: ['./trainer-container.component.scss']
})
export class TrainerContainerComponent implements OnInit {
  public allTrainers$: Observable<Array<Trainer>> ;

  constructor(private trainerService: TrainerService) {
    //this.allTrainers$ = trainerService.getAllTrainers();
   }

  ngOnInit(): void {
    this.allTrainers$ = this.trainerService.getAllTrainers();
  }

}

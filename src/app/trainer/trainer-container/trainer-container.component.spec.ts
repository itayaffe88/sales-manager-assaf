import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerContainerComponent } from './trainer-container.component';

describe('TrainerContainerComponent', () => {
  let component: TrainerContainerComponent;
  let fixture: ComponentFixture<TrainerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMedicinesComponent } from './consult-medicines.component';

describe('ConsultMedicinesComponent', () => {
  let component: ConsultMedicinesComponent;
  let fixture: ComponentFixture<ConsultMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

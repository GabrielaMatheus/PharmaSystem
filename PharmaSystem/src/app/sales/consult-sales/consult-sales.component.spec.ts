import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultSalesComponent } from './consult-sales.component';

describe('ConsultSalesComponent', () => {
  let component: ConsultSalesComponent;
  let fixture: ComponentFixture<ConsultSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBackageComponent } from './buy-backage.component';

describe('BuyBackageComponent', () => {
  let component: BuyBackageComponent;
  let fixture: ComponentFixture<BuyBackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyBackageComponent]
    });
    fixture = TestBed.createComponent(BuyBackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

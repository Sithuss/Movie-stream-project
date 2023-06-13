import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveReviewsComponent } from './give-reviews.component';

describe('GiveReviewsComponent', () => {
  let component: GiveReviewsComponent;
  let fixture: ComponentFixture<GiveReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiveReviewsComponent]
    });
    fixture = TestBed.createComponent(GiveReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

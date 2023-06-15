import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderListComponent } from './uploader-list.component';

describe('UploaderListComponent', () => {
  let component: UploaderListComponent;
  let fixture: ComponentFixture<UploaderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploaderListComponent]
    });
    fixture = TestBed.createComponent(UploaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

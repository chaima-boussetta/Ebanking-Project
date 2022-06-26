import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAggComponent } from './add-agg.component';

describe('AddAggComponent', () => {
  let component: AddAggComponent;
  let fixture: ComponentFixture<AddAggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggLisComponent } from './agg-lis.component';

describe('AggLisComponent', () => {
  let component: AggLisComponent;
  let fixture: ComponentFixture<AggLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggLisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

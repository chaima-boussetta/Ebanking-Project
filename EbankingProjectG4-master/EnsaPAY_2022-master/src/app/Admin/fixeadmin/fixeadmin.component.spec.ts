import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixeadminComponent } from './fixeadmin.component';

describe('FixeadminComponent', () => {
  let component: FixeadminComponent;
  let fixture: ComponentFixture<FixeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixeadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

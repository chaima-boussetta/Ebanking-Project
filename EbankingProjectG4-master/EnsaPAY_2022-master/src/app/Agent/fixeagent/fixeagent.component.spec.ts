import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixeagentComponent } from './fixeagent.component';

describe('FixeagentComponent', () => {
  let component: FixeagentComponent;
  let fixture: ComponentFixture<FixeagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixeagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixeagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

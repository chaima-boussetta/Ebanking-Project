import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavagentComponent } from './navagent.component';

describe('NavagentComponent', () => {
  let component: NavagentComponent;
  let fixture: ComponentFixture<NavagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

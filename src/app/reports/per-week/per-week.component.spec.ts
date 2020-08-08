import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerWeekComponent } from './per-week.component';

describe('PerWeekComponent', () => {
  let component: PerWeekComponent;
  let fixture: ComponentFixture<PerWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

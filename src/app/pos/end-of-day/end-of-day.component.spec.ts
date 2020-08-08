import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfDayComponent } from './end-of-day.component';

describe('EndOfDayComponent', () => {
  let component: EndOfDayComponent;
  let fixture: ComponentFixture<EndOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

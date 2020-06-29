import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimlineDetailsComponent } from './swimline-details.component';

describe('SwimlineDetailsComponent', () => {
  let component: SwimlineDetailsComponent;
  let fixture: ComponentFixture<SwimlineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimlineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimlineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

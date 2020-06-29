import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimlineComponent } from './swimline.component';

describe('SwimlineComponent', () => {
  let component: SwimlineComponent;
  let fixture: ComponentFixture<SwimlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectTestComponent } from './child.component';

describe('DetectTestComponent', () => {
  let component: DetectTestComponent;
  let fixture: ComponentFixture<DetectTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

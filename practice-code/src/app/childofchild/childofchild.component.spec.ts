import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildofchildComponent } from './childofchild.component';

describe('ChildofchildComponent', () => {
  let component: ChildofchildComponent;
  let fixture: ComponentFixture<ChildofchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildofchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildofchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

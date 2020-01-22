import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAndMapComponent } from './filter-and-map.component';

describe('FilterAndMapComponent', () => {
  let component: FilterAndMapComponent;
  let fixture: ComponentFixture<FilterAndMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAndMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAndMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

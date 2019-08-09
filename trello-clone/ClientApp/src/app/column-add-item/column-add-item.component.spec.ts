import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnAddItemComponent } from './column-add-item.component';

describe('ColumnAddItemComponent', () => {
  let component: ColumnAddItemComponent;
  let fixture: ComponentFixture<ColumnAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

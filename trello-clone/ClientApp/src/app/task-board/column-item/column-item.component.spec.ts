import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnItemComponent } from './column-item.component';

describe('ColumnItemComponent', () => {
  let component: ColumnItemComponent;
  let fixture: ComponentFixture<ColumnItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

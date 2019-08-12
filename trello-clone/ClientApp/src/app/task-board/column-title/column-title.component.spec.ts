import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTitleComponent } from './column-title.component';

describe('ColumnTitleComponent', () => {
  let component: ColumnTitleComponent;
  let fixture: ComponentFixture<ColumnTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

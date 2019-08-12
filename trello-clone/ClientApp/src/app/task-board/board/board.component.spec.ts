import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { Column } from '../Column';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new column when createColumn is called', () => {
    const columns: Column[] = [
      new Column('Column 1', [])
    ];
    component = new BoardComponent();
    component.columns = columns;

    component.createColumn('New Column');
    expect(component.columns.length).toBe(2, 'column was created');
  });
});

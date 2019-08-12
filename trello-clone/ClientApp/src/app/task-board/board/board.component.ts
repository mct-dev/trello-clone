import { Component, OnInit } from '@angular/core';
import { Column } from '../Column';
import { Task } from '../Task';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns: Column[] = [
    new Column('First Column', [
      new Task('Task 1 Board 1'),
      new Task('Task 2 Board 1'),
      new Task('Task 3 Board 1')
    ]),
    new Column('Second Column', [
      new Task('Task 2 Board 2'),
      new Task('Task 3 Board 2'),
      new Task('Task 4 Board 2')
    ]),
  ];

  constructor() { }

  ngOnInit() { }

  deleteColumn = (id: string) => this.columns = this.columns.filter(c => c.id !== id);

  createColumn = (title: string) => this.columns.push(new Column(title, []));

  onDrop = (e: CdkDragDrop<any, any>) => {
    // const itemToMove = this.column.tasks.splice(e.previousIndex, 1)[0];
    // this.column.tasks.splice(e.currentIndex, 0, itemToMove);
    console.log(e);
  }


}

import { Component, OnInit } from '@angular/core';
import { Column } from '../Column';
import { Task } from '../Task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns: Column[] = [
    new Column('First Column', [new Task('Task 1!'), new Task('Task 2!'), new Task('Task 3!')]),
  ];

  constructor() { }

  ngOnInit() { }

  deleteColumn = (id: string) => this.columns = this.columns.filter(c => c.id !== id);

  // createColumn = (title: string) => this.columns.push({ id: (Math.random() * 10000).toString(), title, [] });
  createColumn = (title: string) => this.columns.push(new Column(title, []));

}

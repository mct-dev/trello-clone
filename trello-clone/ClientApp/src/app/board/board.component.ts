import { Component, OnInit } from '@angular/core';
import { Column } from '../column/Column';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns: Column[] = [
    { id: '1', title: 'First Column' },
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteColumn = (id: string) => this.columns = this.columns.filter(c => c.id !== id);

  createColumn = (title: string) => this.columns.push({ id: (Math.random() * 10000).toString(), title });

}

import { Component, OnInit } from '@angular/core';
import { Column } from '../column/Column';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns: Column[] = [
    { title: 'First Column' },
  ];

  constructor() { }

  ngOnInit() {
  }

  createColumn = (title: string) => {
    console.log(title);
    this.columns.push({ title });
  }

}

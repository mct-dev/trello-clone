import { Component, OnInit } from '@angular/core';
import { Column } from '../column/Column';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns: Column[] = [
    { title: 'Extra column 1' },
    { title: 'Extra column 2' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

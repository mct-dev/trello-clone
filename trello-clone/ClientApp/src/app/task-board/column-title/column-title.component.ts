import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../Column';

@Component({
  selector: 'app-column-title',
  templateUrl: './column-title.component.html',
  styleUrls: ['./column-title.component.scss']
})
export class ColumnTitleComponent implements OnInit {
  @Input() column: Column;

  constructor() { }

  ngOnInit() { }

}

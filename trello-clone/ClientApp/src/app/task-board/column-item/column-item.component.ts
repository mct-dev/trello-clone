import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-column-item',
  templateUrl: './column-item.component.html',
  styleUrls: ['./column-item.component.scss']
})
export class ColumnItemComponent implements OnInit {
  @Input() item: Task;

  constructor() { }

  ngOnInit() { }

}

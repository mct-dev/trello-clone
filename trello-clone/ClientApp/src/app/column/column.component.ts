import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../Models/Column';
import { Task } from '../Models/Task';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { currentId } from 'async_hooks';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column: Column;
  @Input() deleteColumn: (id: string) => any;
  isAddingItem = false;

  constructor() { }

  ngOnInit() { }

  onIsAddingUpdate = (isAdding: boolean) => this.isAddingItem = isAdding;

  createNewItem = (item: { title: string }) => {
    this.column.tasks.push(new Task(item.title));
  }

  onDrop = (e: CdkDragDrop<any, any>) => {
    const itemToMove = this.column.tasks.splice(e.previousIndex, 1)[0];
    this.column.tasks.splice(e.currentIndex, 0, itemToMove);
  }

}

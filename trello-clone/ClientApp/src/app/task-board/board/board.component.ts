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

  moveItemInArray(arr: any[], prevIndex: number, newIndex: number): any[] {
    const prevItem = arr.splice(prevIndex, 1);
    return arr.splice(newIndex, 0, arr.splice(prevIndex, 1))
  }

  transferBetweenArrays(prevArray: any[], newArray: any[], prevIndex: number, newIndex: number): void {
    newArray.splice(newIndex, 0, prevArray.splice(prevIndex, 1));
  }

  onDrop = (e: CdkDragDrop<any, any>) => {
    console.log(e)
    const prevColumn = e.previousContainer.element.nativeElement;
    const newColumn = e.container.element.nativeElement;
    if (prevColumn === newColumn) {
      const colData = this.columns.find((c: Column) => c.id === prevColumn.id)
      this.moveItemInArray(colData.tasks, e.previousIndex, e.currentIndex);
    } else {
      const prevColumnData = this.columns.find((c: Column) => c.id === prevColumn.id);
      const newColumnData = this.columns.find((c: Column) => c.id === newColumn.id);
      this.transferBetweenArrays(prevColumnData.tasks, newColumnData.tasks, e.previousIndex, e.currentIndex);
    }
  }


}

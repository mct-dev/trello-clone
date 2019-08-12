import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { ColumnAddItemComponent } from './column-add-item/column-add-item.component';
import { ColumnTitleComponent } from './column-title/column-title.component';
import { ColumnItemComponent } from './column-item/column-item.component';
import { CreateColumnComponent } from './create-column/create-column.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../shared-components/shared-components.module';



@NgModule({
  declarations: [
    BoardComponent,
    ColumnComponent,
    ColumnAddItemComponent,
    ColumnTitleComponent,
    ColumnItemComponent,
    CreateColumnComponent
  ],
  exports: [ BoardComponent ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    SharedComponentsModule
  ]
})
export class TaskBoardModule { }

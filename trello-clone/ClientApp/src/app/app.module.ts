import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { CreateColumnComponent } from './create-column/create-column.component';
import { TextInputComponent } from './text-input/text-input.component';
import { ColumnTitleComponent } from './column-title/column-title.component';
import { ColumnItemComponent } from './column-item/column-item.component';
import { ColumnAddItemComponent } from './column-add-item/column-add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ColumnComponent,
    CreateColumnComponent,
    TextInputComponent,
    ColumnTitleComponent,
    ColumnItemComponent,
    ColumnAddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    TextInputComponent
  ],
  exports: [
    ButtonComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedComponentsModule { }

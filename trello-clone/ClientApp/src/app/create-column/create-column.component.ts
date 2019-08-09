import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-column',
  templateUrl: './create-column.component.html',
  styleUrls: ['./create-column.component.scss']
})
export class CreateColumnComponent implements OnInit {

  @Input() createNewColumn: (title: string) => any;
  inputValue = '';

  constructor() { }

  ngOnInit() { }

  onEnterKey = (e: KeyboardEvent) => {
    this.inputValue = (e.target as HTMLInputElement).value;
    this.createNewColumn(this.inputValue);
    (e.target as HTMLInputElement).value = '';
    this.inputValue = '';
  }

}

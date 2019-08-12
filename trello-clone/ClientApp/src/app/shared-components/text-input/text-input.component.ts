import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-textinput',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() onEnterKey: (e: KeyboardEvent) => any;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() fontSize?: FontSize;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onChange = (e) => this.valueChange.emit(e.target.value);

}

export enum FontSize {
  Small,
  Large
}

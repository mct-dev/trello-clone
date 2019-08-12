import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // @Input() text: string;
  @Input() type: 'success' | 'error' | 'warning' | 'info';

  constructor() { }

  ngOnInit() { }

}

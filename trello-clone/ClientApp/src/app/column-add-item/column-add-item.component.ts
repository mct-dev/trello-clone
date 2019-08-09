import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-column-add-item',
  templateUrl: './column-add-item.component.html',
  styleUrls: ['./column-add-item.component.scss']
})
export class ColumnAddItemComponent implements OnInit {
  @Input() createItem: (item: { title: string }) => any;
  isAddingItem = true;
  newItemValue = '';

  constructor() { }

  ngOnInit() { }

  createNewItem = () => {
    if (this.newItemValue === '') {
      return;
    }

    this.toggleIsAddingItem();
    this.createItem({ title: this.newItemValue });
  }

  onEnterKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    this.createNewItem();
  }

  toggleIsAddingItem = () => this.isAddingItem = !this.isAddingItem;

  onAddItemClick = () => {
    this.isAddingItem = true;
    this.newItemValue = '';
    // TODO: focus textarea right here
  }

}

import { Component, OnInit, Input, EventEmitter, Output, ViewChild, QueryList } from '@angular/core';

@Component({
  selector: 'app-column-add-item',
  templateUrl: './column-add-item.component.html',
  styleUrls: ['./column-add-item.component.scss']
})
export class ColumnAddItemComponent implements OnInit {
  @Input() createItem: (item: { title: string }) => any;
  @Output() isOpen = new EventEmitter<boolean>();
  isAddingItem = false;
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

  toggleIsAddingItem = () => {
    const isAdding = !this.isAddingItem;
    this.isOpen.emit(isAdding);
    this.isAddingItem = isAdding;
  }

  onAddItemClick = () => {
    this.toggleIsAddingItem();
    this.newItemValue = '';
    // TODO: focus textarea right here
  }

}

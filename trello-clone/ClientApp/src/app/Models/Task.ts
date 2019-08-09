import * as uuid from 'uuid/v1';

export class Task {
  id: string;
  title: string;
  content: string;

  constructor(title: string) {
    this.title = title;
    this.id = uuid();
    this.content = '';
  }
}

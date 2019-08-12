import * as uuid from 'uuid/v1';
import { Task } from './Task';

export class Column {
  id: string;
  title: string;
  tasks: Task[];

  constructor(title: string, tasks?: Task[]) {
    this.id = uuid();
    this.title = title;
    this.tasks = tasks ? tasks : [];
  }
}

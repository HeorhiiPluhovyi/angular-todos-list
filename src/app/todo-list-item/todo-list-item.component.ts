import { isNgTemplate } from '@angular/compiler';
import { TodoItem } from '../todo-item';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() item: TodoItem = {todoName: '', isCompleted: false};
  @Input() itemIndex: number = 0;
  @Output() delTodoItem = new EventEmitter<number>();

  isCompleated: boolean = this.item.isCompleted;

  compleated(): void {
    this.item.isCompleted = !this.isCompleated
  }

  del(): void {
    this.delTodoItem.emit(this.itemIndex);
  }

  ngOnInit(): void {
  }

}

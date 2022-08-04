import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent implements OnInit {
  inputText: string = '';

  @Output() addTodoItem = new EventEmitter<string>();

  constructor() { }

  add(): void {
    if (this.inputText.length !== 0) {
      this.addTodoItem.emit(this.inputText);
      this.inputText = '';
    }
  }

  ngOnInit(): void {
  }

}

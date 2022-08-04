import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [
    {
      todoName: 'Study aggular',
      isCompleted: false
    },
    {
      todoName: 'English practise',
      isCompleted: false
    },
    {
      todoName: 'Wet out of bed',
      isCompleted: true
    },
  ];

  constructor() { }

  addTodoItem(todoName: string): void {
    this.todoList.push({todoName: todoName, isCompleted: false});
  }

  delTodoItem(index: any): void {
    this.todoList.splice(index, 1);
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService, Todo } from './todo.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTodo: string = '';
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
    } else { alert("Task cannot be empty!") }
  }
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
  toggleTodoCompletion(id: number) {
    this.todoService.toggleTodoCompletion(id);
  }
}

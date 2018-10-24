import { Component, OnInit } from '@angular/core';

// service
import { TodoService } from '../../../services/todo.service';
import { Todo  } from '../../../models/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {

  todoList: Todo[];

  constructor(
    private todoService: TodoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.todoService.getTasks()
      .snapshotChanges()
      .subscribe(item => {
        this.todoList = [];
        item.forEach(id => {
          let element = id.payload.toJSON();
          element['$key'] = id.key;
          this.todoList.push(element as Todo);
        })
      })
  }

  onCheck(todo: Todo) {
    this.todoService.updateState(todo)
  }

  onEdit(todo: Todo) {
    
  }

  onDelete($key: string) {
    if (confirm('Está seguro de eliminar?')) {
      this.todoService.deleteTask($key);
      this.toastr.success('Tarea eliminada!');
    }
  }

}

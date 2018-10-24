import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: AngularFireList<any>;
  selectedTask: Todo = new Todo();
  
  constructor(private firebase: AngularFireDatabase) { }

  // obtener las tareas guardadas en la BD
  getTasks() {
    return this.todoList = this.firebase.list('task-list');
  }

  // ingresar tarea
  insertTask(task: Todo){
    this.todoList.push({
      nameTask: task,
      isDone: false
    })
  }

  // actualizar tarea
  updateTask(task: Todo){
    this.todoList.update(task.$key, {
      nameTask: task.task,
      isDone: task.isDone
    })
  }

  // actualizar estado
  updateState(task: Todo){
    this.todoList.update(task.$key, {
      isDone: true
    })
  }

  // eliminar tarea
  deleteTask($key: string){
    this.todoList.remove($key);
  }

}

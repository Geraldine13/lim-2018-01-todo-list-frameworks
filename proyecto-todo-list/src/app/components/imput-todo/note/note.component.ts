import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() { // Acá se carga las tareas ya ingresadas
    this.todoService.getTasks();
    this.resetForm()
  }

  // para enviar tarea
  onSubmit(taskForm: NgForm) {
    this.todoService.insertTask(taskForm.value);
    this.resetForm(taskForm);
  }

  // para resetear form
  resetForm(taskForm?: NgForm) {
    if (taskForm != null) {
      taskForm.reset();
      this.todoService.selectedTask = new Todo();
    }
  }

}

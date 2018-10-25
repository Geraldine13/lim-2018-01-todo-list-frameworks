import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Todo } from '../../../models/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(
    public todoService: TodoService,
    public toastr: ToastrService
  ) { }

  ngOnInit() { // Acá se carga las tareas ya ingresadas
    this.todoService.getTasks();
    this.resetForm()
  }

  // para enviar tarea
  onSubmit(taskForm: NgForm) {
    if (taskForm.value) {
      if (taskForm.value.trim()) {
        this.todoService.insertTask(taskForm.value);
        this.resetForm(taskForm);
      } else {
        this.toastr.info('Debe ingresar una tarea');
      }
    } else {
      this.toastr.info('Debe ingresar una tarea');
    }
  }

  // para resetear form
  resetForm(taskForm?: NgForm) {
    if (taskForm != null) {
      taskForm.reset();
      this.todoService.selectedTask = new Todo();
    }
  }

}

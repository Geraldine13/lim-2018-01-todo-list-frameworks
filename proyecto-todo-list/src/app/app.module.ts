import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

// importando firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// components
import { ImputTodoComponent } from './components/imput-todo/imput-todo.component';
import { ListTodoComponent } from './components/imput-todo/list-todo/list-todo.component';

// servicios (métodos)
import { TodoService } from './services/todo.service';
import { NoteComponent } from './components/imput-todo/note/note.component';



@NgModule({
  declarations: [
    AppComponent,
    ImputTodoComponent,
    ListTodoComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

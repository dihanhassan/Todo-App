import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoApp.UI';

  constructor (
       private _dialog : MatDialog,
      private todoService : TodoService
    ){}
  openAddTodoForm(){
   const dialogRef=  this._dialog.open(AddtodoComponent);
   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.todoService.getAllTodos();
      }
    }
   });
  }

  
}

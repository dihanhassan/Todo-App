import { Component, Inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
interface PriorityOption {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent  implements OnInit{
  priorityOptions: PriorityOption[] = [
    { value: 'normal', viewValue: 'Normal' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'high', viewValue: 'High' },
  ];

  todos: Todo[] = [];
  newTodo: Todo = {
    id: 0,
    title: '',
    descriptions: '',
    isCompleted: 0,
    createdOn: new Date(),
    dueDate: new Date(),
    prioritys: ''
  };

  constructor
  (
    private _dialog : MatDialog,
    private todoService: TodoService ,
    private _dialogRef : MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
  ) 
  {

    this.newTodo=data.todo;
  }

  ngOnInit(): void {
    this.getAllTodos();
   
    
  }

  getAllTodos() {
    this.todoService.getAllTodos()
      .subscribe({
        next: (todos) => {
          this.todos = todos;
        }
      });
  }



  updateTodo() {
    console.log(this.newTodo)
    this.todoService.updateTodo(this.newTodo)
      .subscribe({
        next: (todo) => {
         
          this._dialogRef.close(true);


        }
      });
  }

  


  onClose() {
    
  }

}



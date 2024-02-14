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
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  
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
    private _dialogRef : MatDialogRef<AddtodoComponent>,
    @Inject (MAT_DIALOG_DATA) private data:any
    ) {}

  ngOnInit(): void {
    this.getAllTodos();
    // this.data.id=this.newTodo.id;
    // this.data.title=this.newTodo.title;
    // this.data.descriptions=this.newTodo.descriptions;
    // this.data.isCompleted=this.newTodo.isCompleted;
    // this.data.createdOn=this.newTodo.createdOn;
    // this.data.dueDate=this.newTodo.dueDate;
    // this.data.prioritys=this.newTodo.prioritys;
    
  }

  getAllTodos() {
    this.todoService.getAllTodos()
      .subscribe({
        next: (todos) => {
          this.todos = todos;
        }
      });
  }

  addTodo() {

    console.log(this.newTodo)

    this.todoService.addTodo(this.newTodo)
      .subscribe({
        next: (todo) => {
          this._dialogRef.close(true);
         
          this.resetNewTodo();
        }
      });
  }

  


  onClose() {
    
  }

  private resetNewTodo() {
    this.newTodo = {
      id: 0,
      title: '',
      descriptions: '',
      isCompleted: 0,
      createdOn: new Date(),
      dueDate: new Date(),
      prioritys: ''
    };
  }
}

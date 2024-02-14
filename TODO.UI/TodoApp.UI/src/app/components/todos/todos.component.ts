import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { AddtodoComponent } from '../addtodo/addtodo.component';
interface PriorityOption {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  priorityOptions: PriorityOption[] = [
    { value: 'PRIORITY', viewValue: 'PRIORITY' },
    { value: 'DUEDATE', viewValue: 'DUE DATE' },
    { value: 'CREATETIME', viewValue: 'CREATE TIME' },
  ];

  myObj!:EditTodoComponent
  todos: Todo[]= [];
   newTodo: Todo = {
    id: 0,
    title: '',
    descriptions: '',
    isCompleted: 0,
    createdOn: new Date() ,
    dueDate: new Date(),
    prioritys:''
  };

  filterOption!:string

  constructor(private todoService: TodoService,
    private _dialog : MatDialog,
    //  private _edit:EditTodoComponent
   
    ) {}
  ngOnInit(): void {
    this.getAllTodos();
 
    
  }

  getAllTodos(){
    this.todoService.getAllTodos()
    .subscribe({
      next: (todos) => {
        this.todos = todos;
        
      }
    });
  }

  addTodo(){
    this.todoService.addTodo(this.newTodo)
    .subscribe({
     next: (todo) => {
       this.getAllTodos();
     }
    });
   }
   deleteTodo(id:number){
     this.todoService.deleteTodo(id)
     .subscribe({
      next: (response)=>{
        this.getAllTodos();
      }
     })
   }


   

   editTodo(todo:Todo){
     
    const dialogRef = this._dialog.open(EditTodoComponent, {
      data: { todo: todo }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
    
   }

   
  
}

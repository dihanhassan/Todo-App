import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseApiUrl: string ="https://localhost:7131";
   
  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<any>(this.baseApiUrl + '/api/Todo/GetAllTodos')
               .pipe(map((response: { listTodos: any; }) => response.listTodos));
  }
  addTodo(newTodo: Todo): Observable<Todo>{
    newTodo.id =0;
    return this.http.post<Todo>(this.baseApiUrl + '/api/Todo/AddTodo', newTodo);
  }

  deleteTodo(id : number) : Observable<Todo>{
    alert("Todo deleted");
    return this.http.delete<Todo>(this.baseApiUrl + '/api/Todo/DeleteTodo/'+id)
  }
  updateTodo(newTodo: Todo): Observable<Todo>{
    console.log(newTodo)
    return this.http.put<Todo>(this.baseApiUrl + '/api/Todo/UpdateTodo', newTodo);
   
  }

}

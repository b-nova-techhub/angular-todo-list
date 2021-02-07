import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from '@models/ToDo'
import { ToDoEvent } from '@models/ToDoEvent';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDoEventType } from '../enums/ToDoEventType';
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  toDos:ToDo[] = [];
  inputToDoText:string = 'abc';

  constructor(private toDoService:ToDoService,
     private router:Router) { }

  ngOnInit(): void {
    this.toDos=this.toDoService.getToDos();
  }

  handleToDoEvent(toDoEvent:ToDoEvent){
    if(toDoEvent.type === ToDoEventType.COMPLETE){
      this.toDoService.toggleCompleted(toDoEvent.index);
      if(this.toDoService.areAllToDosCompleted()){
        this.router.navigateByUrl('/success');
      }
    } else if (toDoEvent.type === ToDoEventType.DELETE){
      this.toDos = this.toDoService.deleteToDo(toDoEvent.index);
    }
  }

  addToDo(){
    this.toDoService.addToDo({
        content: this.inputToDoText,
        completed: false
      });
    this.inputToDoText = "";
  }
}

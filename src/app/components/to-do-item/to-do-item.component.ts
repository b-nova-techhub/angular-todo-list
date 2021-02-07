import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ToDo } from '@models/ToDo';
import { ToDoEvent } from '@models/ToDoEvent';
import { ToDoEventType } from '../enums/ToDoEventType';


@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() toDo:ToDo = new ToDo;
  @Input() i:number = 0;

  @Output() toDoEvent = new EventEmitter<ToDoEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted(index:number){
    this.emitToDoEvent(index,ToDoEventType.COMPLETE);
  }

  deleteToDo(index:number){
    this.emitToDoEvent(index,ToDoEventType.DELETE);
  }

  private emitToDoEvent(index:number, toDoEventType:ToDoEventType){
    this.toDoEvent.emit({
      index: index,
      type:toDoEventType
    });
  }
}

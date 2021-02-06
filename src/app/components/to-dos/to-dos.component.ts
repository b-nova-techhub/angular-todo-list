import { Component, OnInit } from '@angular/core';
import { ToDo } from '@models/ToDo'
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  toDos:ToDo[] = [];
  inputToDoText:string = 'abc';

  constructor() { }

  ngOnInit(): void {
    this.toDos = [
      {
        content: 'Get tea',
        completed: true
      },
      {
        content: 'Write blog post',
        completed: false
      },
      {
        content: 'Publish blog post',
        completed: false
      }
    ]
  }

  toggleCompleted(indexToUpdate:number):void {
    this.toDos.map((item,index) => {
      if (index == indexToUpdate) {
        item.completed = !item.completed;
      }
    })
  }

  deleteToDo(indexToDelete:number):void {
    this.toDos = this.toDos.filter((item,index) => index !== indexToDelete);
  }

  addToDo(){
    this.toDos.push(
      {
        content: this.inputToDoText,
        completed: false
      }
    )
    this.inputToDoText = "";
  }

}

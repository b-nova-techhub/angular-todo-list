import { Injectable } from '@angular/core';
import { ToDo } from '@models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDos:ToDo[] = [];
    
  constructor() {
    let toDoString= localStorage.getItem("toDos");
    if(toDoString){
      this.toDos = JSON.parse(toDoString);
    } else {
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
  }

  getToDos():ToDo[]{
    return this.toDos
  }

  addToDo(toDo:ToDo):void{
    this.toDos.push(toDo);
    this.setOrUpdateLocalStorage();
  }
  
  toggleCompleted(indexToUpdate:number):void {
    this.toDos.map((item,index) => {
      if (index == indexToUpdate) {
        item.completed = !item.completed;
      }
    })
    this.setOrUpdateLocalStorage();
  }

  deleteToDo(indexToDelete:number):ToDo[] {
    this.toDos = this.toDos.filter((item,index) => index !== indexToDelete);
    this.setOrUpdateLocalStorage();
    return this.toDos;
  }

  areAllToDosCompleted():boolean {
    return this.toDos.every(x => x.completed === true);
  }

  private setOrUpdateLocalStorage(){
    localStorage.setItem("toDos",JSON.stringify(this.toDos));
  }
}

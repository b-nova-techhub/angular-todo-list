import { ToDoEventType } from "../components/enums/ToDoEventType";

export class ToDoEvent {
  type:ToDoEventType = ToDoEventType.COMPLETE;
  index:number = 0;
}

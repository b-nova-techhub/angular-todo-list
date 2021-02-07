import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDoService } from '../services/to-do.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoCompletedGuard implements CanActivate {

  constructor(private toDoService:ToDoService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const areAllToDosCompleted:boolean = this.toDoService.areAllToDosCompleted();
    if(!areAllToDosCompleted){
      this.router.navigateByUrl('/');
    }

    return areAllToDosCompleted;
  }
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { SuperCoolPipePipe } from './pipes/super-cool-pipe.pipe';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { SuccessComponent } from './components/success/success.component';
import { RouterModule } from '@angular/router';
import { ToDoCompletedGuard } from './guards/to-do-completed.guard';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    SuperCoolPipePipe,
    ToDoItemComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ToDosComponent},
      {path: 'success', component: SuccessComponent,canActivate: [ToDoCompletedGuard]},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

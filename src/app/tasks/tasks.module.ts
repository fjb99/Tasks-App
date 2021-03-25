import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TaskModalComponent} from './task-modal/task-modal.component';
import {TasksRoutingModule} from './tasks-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent,
    TaskModalComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TasksModule {
}

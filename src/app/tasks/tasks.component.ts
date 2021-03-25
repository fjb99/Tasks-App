import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TaskModalComponent} from './task-modal/task-modal.component';
import {Task} from '../core/models/task';
import {TaskService} from '../core/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
// observable - $ mbrapa tregon nje variabel qe ndyshon
  tasks$ = this.taskService.tasks$;

  constructor(
    private auth: AuthService,
    private modalService: NgbModal,
    private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }

  open(): void {
    const modalRef = this.modalService.open(TaskModalComponent);

  }

  delete(id: string): void {
    this.taskService.delete(id);
  }

  update(task: Task): void {
    const modalRef = this.modalService.open(TaskModalComponent);
    modalRef.componentInstance.task = task;
  }
}

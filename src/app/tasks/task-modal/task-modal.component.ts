import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {TaskService} from '../../core/services/task.service';
import {Task} from 'src/app/core/models/task';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  @Input() task?: Task;

  taskForm = this.fb.group({
    title: '',
    description: ''
  });

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }


  save(): void {
    console.log(this.taskForm.value);
    // object desctucturing
    const {title, description} = this.taskForm.value;
    // this.taskService.add(this.taskForm.value.title, this.taskForm.value.description);

    if (this.task) {
      const payload = {...this.task, title, description};
      this.taskService.update(payload);
    } else {
      this.taskService.add(title, description);
    }
    this.activeModal.close();
  }




}

import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Task} from '../models/task';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksCollection = this.afs.collection<Task>('tasks',
    ref => ref.where('userId', '==', this.authService.user?.uid)
  );
  tasks$ = this.tasksCollection.valueChanges({idField: 'id'});

  constructor(private afs: AngularFirestore, private authService: AuthService) {

  }

  add(title: string, description: string): void {
    // Persist a document id
    // console.log(this.authService.user?.uid);
    const userId = this.authService.user?.uid;
    if (userId) {
      const id = this.afs.createId();
      const task: Task = {id, title, description, status: 'draft', userId};
      this.tasksCollection.doc(id).set(task);
    }
  }

  delete(id: string): void {
    this.tasksCollection.doc(id).delete();
  }

  update(task: Task): void {
    this.tasksCollection.doc(task.id).set(task);
  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {
  players$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }



}

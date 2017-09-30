import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }




}

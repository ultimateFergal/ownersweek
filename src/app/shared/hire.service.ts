import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/firestore';

import { Hire } from 'src/app/models/hire.model';


@Injectable({
  providedIn: 'root'
})
export class HireService {


  constructor(private firestore: AngularFirestore) {
    console.log(this.firestore.collection, 'this.firestore');
   }

  /* Create Hire */
  public createHire(hire: Hire) {
    console.log('hi');
    return this.firestore.collection('hires').add(hire);
  }


}

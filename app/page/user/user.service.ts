import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User {
  id?:string,
  type:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Users: Observable<User[]>;
  private UserCollection: AngularFirestoreCollection<User>;


  constructor(private  afs:  AngularFirestore, 
    private  afAuth: AngularFireAuth) { 
      this.UserCollection  =  this.afs.collection<User>('Users');
      this.Users  =  this.UserCollection.snapshotChanges().pipe(
          map(actions  =>  {
              return  actions.map(a  =>  {
                  const  data  =  a.payload.doc.data();
                  const  id  =  a.payload.doc.id;
                  return  {  id,  ...data  };
              });
          })
      );

    }
    getUsers():  Observable<User[]>  {
      return  this.Users;
      }

    addUser(book:User):  Promise<DocumentReference>  {
    return  this.UserCollection.add(book); 
      }

      

    getuser(id){
     return this.UserCollection
      .doc(id)
      .get()
      }

     

        
 

    SignIn(newEmail: string, newPassword: string): Promise<any> {
      return this.afAuth.signInWithEmailAndPassword(newEmail, newPassword);
    }

    SignOut(): Promise<void> {
      return this.afAuth.signOut();
   }

    SignUp(newEmail: string, newPassword: string): Promise<any> {
      return this.afAuth.createUserWithEmailAndPassword(newEmail, newPassword);
    }

    

}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
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


  constructor(private  afs:  AngularFirestore, public alertCtrl:AlertController,
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

      
    //   getuser(id:  string):any{
    //     let userr;
    //     this.getUsers().forEach((value) => {
    //       value.forEach(a =>{ 
    //         if(a.id=id) 
    //       return a.type}
    //       )
    //       });

    // }
    getuser(id):  Observable<User|undefined>  {
      return  this.UserCollection.doc<User>(id).valueChanges().pipe(
          map(idea  =>  {
            if(idea)
              idea.id  =  id;
              return  idea;
          })
      );
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

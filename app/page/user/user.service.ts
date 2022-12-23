import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  afs:  AngularFirestore, public alertCtrl:AlertController,
    private  afAuth: AngularFireAuth) { }

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

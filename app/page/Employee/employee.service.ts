import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user/user.service';

export interface Emp {
  id?: string;
  name: string;
  cpr: string;
  job: string;
  shift: string;
  salary: number;
  switchShift: number[];
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private Employees: Observable<Emp[]>;
  private EmployeeCollection: AngularFirestoreCollection<Emp>;
  public Employee:Emp[] = [];

  constructor(private  afs:  AngularFirestore, public alertCtrl:AlertController,
    private  afAuth: AngularFireAuth,public UserSrv:UserService) {
      this.EmployeeCollection  =  this.afs.collection<Emp>('employees');
      this.Employees  =  this.EmployeeCollection.snapshotChanges().pipe(
        map(actions  =>  {
            return  actions.map(a  =>  {
                const  data  =  a.payload.doc.data();
                const  id  =  a.payload.doc.id;
                return  {    id, ...data  };
            });
        })
    );

     }
     getEmployees():  Observable<Emp[]>  {
      return  this.Employees;
  }

    getEmployee(id:  string):  Observable<Emp|undefined>  {
      return  this.EmployeeCollection.doc<Emp>(id).valueChanges().pipe(
          map(idea  =>  {
            if(idea)
              idea.id  =  id;
              return  idea
          })
      );
    }

 


        addEmployee(Employee:  Emp,type)  {
            if(Employee.id)
            this.UserSrv.SignUp(Employee.id,Employee.cpr).then(()=>{
              this.EmployeeCollection.doc(Employee.id).set(Employee);
              this.afs.collection('Users').doc(Employee.id).set({type: type});
            })
      }

      updateEmployee(Employee:  Emp):  Promise<void>  {
      return  this.EmployeeCollection.doc(Employee.id).update(Employee);
      }

      deleteEmployee(id:  string):  Promise<void>  {
      return  this.EmployeeCollection.doc(id).delete();
      }


}

import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user/user.service';

export interface Emp {
  id?: string;
  name: string;
  cpr: string;
  job: string;
  shift: string[];
  salary: number;
  switchShift: switchShift[];
}

export interface switchShift {
  id: string;
  day: string;
  status: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  week=['Sanday','Moday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  public Employees: Observable<Emp[]>;
  private EmployeeCollection: AngularFirestoreCollection<Emp>;
  public Employee:Emp[] = [];

  constructor(private  afs:  AngularFirestore, public alertCtrl:AlertController,
    public afAuth: AngularFireAuth,public UserSrv:UserService) {
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

  getEmployees():  Observable<Emp[]>{
    return this.Employees;
  }

  getEmployee(id:string){
    return this.EmployeeCollection.doc(id).get()
  }

  addEmployee(Employee:Emp,type){
    

    
   
  }

  updateEmployee(Employee:  Emp):  Promise<void>  {
    return  this.EmployeeCollection.doc(Employee.id).update(Employee);
  }

  deleteEmployee(id:  string):  Promise<void>  {
    return  this.EmployeeCollection.doc(id).delete().then(()=>{
      this.afs.collection('Users').doc(id).delete();
    }
    );

  }
  switchShift(i){

  }

}

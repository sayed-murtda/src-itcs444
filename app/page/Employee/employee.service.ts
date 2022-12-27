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
  StatusSwitch: number[];
}

export interface switchShift {
  id?:string;
  id_form: string;
  shift_from: string;
  id_to:string;
  shift_to: string;
  day: string;
  status: number;
}


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  week=['Sanday','Moday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  public Employees: Observable<Emp[]>;
  private EmployeeCollection: AngularFirestoreCollection<Emp>;
  public Employee:Emp[] = [];

  public Requests: Observable<switchShift[]>;
  private RequestsCollection: AngularFirestoreCollection<switchShift>;

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

    this.RequestsCollection  =  this.afs.collection<switchShift>('switchShift');
      this.Requests  =  this.RequestsCollection.snapshotChanges().pipe(
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
    return this.EmployeeCollection.doc<Emp>(id).get()
  }

  getEmployee2(id: string):  Observable<Emp|undefined>{
        return this.EmployeeCollection.doc<Emp>(id).valueChanges().pipe(
          map(idea => {
            if(idea)
            idea.id = id;
            return idea
          })
        );
      }
    

  addEmployee(Employee:Emp,type){
      if(Employee.id)
        this.UserSrv.SignUp(Employee.id,Employee.cpr).then(()=>{
           this.EmployeeCollection.doc(Employee.id).set(Employee).then(()=>{
              this.afs.collection('Users').doc(Employee.id).set({type: type})
              this.MassegeBox('done add');
           })
         }).catch(()=> this.MassegeBox('error add') )
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
  switchShift(s,array:number[]) {
    console.log(s);
   return this.afs.collection('switchShift').add(s).then(()=>{
    this.EmployeeCollection.doc(s.id_form).update({StatusSwitch:array})
   }
   );
  }






  // _______________________________req

  getRequests():  Observable<switchShift[]>{
    return this.Requests;
  }

  CancelRequests(user_id,array,id):  Promise<void>  {
    this.EmployeeCollection.doc(user_id).update({StatusSwitch:array})
    return  this.RequestsCollection.doc(id).update({status:-1});
  }
  
  RejectRequests(from,day,id_req)  {
    console.log(from);
    let array=[-1,-1,-1,-1,-1,-1,-1];
    let ar;
    this.getEmployee(from).subscribe((res)=>{
      ar=res.data();
      array=ar.StatusSwitch;
      array[day]=-1;
      this.EmployeeCollection.doc(from).update({StatusSwitch:array})
      return  this.RequestsCollection.doc(id_req).delete();
    })
   
  }

  AcceptRequests(from,day,id_req,shift_from,shift_to,to)  {
    console.log(from);
    let array=[-1,-1,-1,-1,-1,-1,-1];
    let shift;
    let ar;

    let shift2;
    let ar2;
    this.getEmployee(from).subscribe((res)=>{
      ar=res.data();
      array=ar.StatusSwitch;
      shift=ar.shift;
      shift[day]=shift_to;
      array[day]=-1;
      this.EmployeeCollection.doc(from).update({StatusSwitch:array,shift:shift})

      this.getEmployee(to).subscribe((res2)=>{
        ar2=res2.data();
        shift2=ar2.shift;
        shift2[day]=shift_from;
        this.EmployeeCollection.doc(to).update({shift:shift2})
        return  this.RequestsCollection.doc(id_req).delete();
  
  
        
      })
      
    })
   
  }





    
  async MassegeBox(mesege:any) {
    const alert =await   this.alertCtrl.create({
               header: 'Workshops',
               message: mesege,
               buttons: ['OK']
        });
        alert.present();
  }

   
}

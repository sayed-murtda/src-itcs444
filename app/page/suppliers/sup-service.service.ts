import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { AlertController } from '@ionic/angular';


export interface supplier {
  id?: string,
  name: string,
  phone: string,
  pass: string,
  items: item[],
  Requests: Request[]
}

interface item{
  id: any;
  name: string;
  categories:string;
  description: string;
  qtyPerCarton: number;
  price: number;
  supplyPrice: number;
  image: string;
  qty_Requests?:number;
  Supplier:string;
}

interface Request{
  id: any;
  items: item[],
  total_price:number;
  Status:string;
  date:string;
}

@Injectable({
  providedIn: 'root'
})
export class SupServiceService {

  // these two array for dealing with firebase
   private sup: Observable<supplier[]>;
   private supFire: AngularFirestoreCollection<supplier>; // linked with firebase

  // this array will have the variables of suppliers (ID, name and phone )
  public supAdd: supplier = {} as supplier;

  constructor(private afs: AngularFirestore, public UserSrv: UserService,public alertCtrl:AlertController) {
    // start putting firebase stuff for adding supplier
      this.supFire= this.afs.collection<supplier>('supplier');
      this.sup= this.supFire.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
      // end putting firebase stuff for adding supplier
    }

    // this for add supplier in firebase
   add(sup:supplier): Promise<any> {
    return this.supFire.add(sup); 
}

addsup(sup:supplier)  {
  let type = "supplier";
  if(sup.id)
  this.UserSrv.SignUp(sup.id,sup.pass).then(()=>{
    this.supFire.doc(sup.id).set(sup);
    this.afs.collection('Users').doc(sup.id).set({type: type});
    this.MassegeBox("supplier has been added")
  }).catch(()=>{
    this.MassegeBox('error add');
  })
}

  updateSup(sup: supplier): Promise<void> {
      return this.supFire.doc(sup.id).update({ ...sup });
    }


      getSuppliers(): Observable<supplier[]> {
          return this.sup;
        }
      

      getSupplier(id:string){
        return this.supFire.doc(id).get()
      }

      getSupplier2(id:string): Observable<supplier|undefined>{
        return this.supFire.doc<supplier>(id).valueChanges().pipe(
          map(idea => {
            if(idea)
            idea.id = id;
            return idea
          })
        );
      }

      updateEmployee(id, item: any[]):  Promise<void>  {
        return  this.supFire.doc(id).update({items: item});
      }

      additem(id, items: any[]):  Promise<void>  {
        return  this.supFire.doc(id).update({items: items});
      }



      async MassegeBox(mesege:any) {
        const alert =await   this.alertCtrl.create({
                   header: 'Workshops',
                   message: mesege,
                   buttons: ['OK']
            });
            alert.present();
          }

        deletItem(id,items){
          return  this.supFire.doc(id).update({items: items});

        }
      
  



}

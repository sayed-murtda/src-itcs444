import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
// this interface discripe the structure supplier array in firebase

export interface supplier {
  id?: string,
  name: string,
  phone: string,
  pass: string,
  items: item[],
}

interface item{
  id: any;
  name: string;
  description: string;
  qtyPerCarton: number;
  price: number;
  supplyPrice: number;
  image: string;
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

  constructor(private afs: AngularFirestore, public UserSrv: UserService) {
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
    alert("supplier has been added")
  }).catch(()=>{
    alert('error Email');
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

      updateEmployee(id, item: any[]):  Promise<void>  {
        return  this.supFire.doc(id).update({items: item});
      }
      
  
}

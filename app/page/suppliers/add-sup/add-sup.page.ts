import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

// this interface discripe the structure supplier array in firebase
export interface supplier {
  id?: string,
  name: string,
  phone: string
}


@Component({
  selector: 'app-add-sup',
  templateUrl: './add-sup.page.html',
  styleUrls: ['./add-sup.page.scss'],
})
export class AddSupPage implements OnInit {

  // these two array for dealing with firebase
  private sup: Observable<supplier[]>;
  private supFire: AngularFirestoreCollection<supplier>; // linked with firebase

  // this array will have the variables of suppliers (ID, name and phone )
  public supAdd: supplier = {} as supplier;

  insert(){
    this.supFire.add(this.supAdd).then((res)=>{
      alert("supplier has been added")
    });
  }



    constructor(private afs: AngularFirestore) {
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
    
  ngOnInit() {
  }
  supName: any;
  supPhone: any;

// this for add supplier in firebase
   add(sup:supplier): Promise<any> {
          return this.supFire.add(sup); 
      }
    
}

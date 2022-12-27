import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user/user.service';

export interface itm {
  categories: string;
  description: string;
  id:string;
  image: string;
  name: string;
  price: number;
  qtyPerCartoon: number;
  quantity:number;
  supplier: string;
  supplyPrice: number;
}
export interface item{
  id?: any;
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

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public Items: Observable<itm[]>;
  private ItemCollection: AngularFirestoreCollection<itm>;
  public Item:itm[] = [];

  constructor(private  afs:  AngularFirestore, public alertCtrl:AlertController,
    public afAuth: AngularFireAuth,public UserSrv:UserService) {

      this.ItemCollection  =  this.afs.collection<itm>('items');
      this.Items  =  this.ItemCollection.snapshotChanges().pipe(
        map(actions  =>  {
            return  actions.map(a  =>  {
                const  data  =  a.payload.doc.data();
                const  id  =  a.payload.doc.id;
                return  {    ...data  };
            });
        })
    );
    }

  getItems():  Observable<itm[]>{
    return this.Items;
  }

  getItem(name:string){
    return this.ItemCollection.doc<itm>(name).get()
  }

  getItem2(name: string):  Observable<itm|undefined>{
    return this.ItemCollection.doc<itm>(name).valueChanges().pipe(
      map(idea => {
        if(idea)
        idea.name = name;
        return idea
      })
    );
  }

  addItem(item:itm){
    return this.ItemCollection.add(item);
  }

  updateItem(item:itm):  Promise<void>  {
    return  this.ItemCollection.doc(item.id).update(item);
  }

  deleteItem(name:string):Promise<void>{
    return this.ItemCollection.doc(name).delete();
  }

}

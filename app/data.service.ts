import { Injectable } from '@angular/core';

interface item{
  id: any;
  name: string;
  description: string;
  qty: number;
  price: number;
  supplyPrice: number;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  ListItems: item[] = [
                        {id:1, name: 'Ice cream', description: 'so good'
                        , qty:10, price: 200, supplyPrice: 100, image: 'gold.jpg'},

                        {id:2, name: 'kinder bueno', description: 'so cool'
                        , qty:15, price: 300, supplyPrice: 200, image: 'kinder.jpg'}, 

                        {id:3, name: 'Lays', description: 'crispy'
                        , qty:17, price: 50, supplyPrice: 30, image: 'lays.jpg'},

                        {id:4, name: 'Water', description: 'water is good'
                        , qty:50, price: 100, supplyPrice: 60, image: 'water.jpg'} 
                      ];
users=[
  {id:1,username:'admin',password:'admin',type:'admin'},
]
  FilteredList: item[]= [];

  cheackuser (username:string,password:string){

   return this.users.findIndex( a => a.username==username && a.password==password  );
  }
}

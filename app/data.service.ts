import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Emp, EmployeeService } from './page/Employee/employee.service';



interface item{
  id: any;
  name: string;
  description: string;
  qty: number;
  price: number;
  supplyPrice: number;
  image: string;
}
export interface SupplierItems{
  ID:any,
  Name:String,
  // Img:String,
  Price: number,
  Description:String,
  itemsPerCartoon:number,
}
export interface SupItem{
  id: any;
  name: string;
  ItemsForSupplier:SupplierItems[]
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  Userstype='';
  emp:any={
    id: "string",
    name: "string",
    cpr: "string",
    job: "string",
    shift: "string",
    salary: 2423423,
    switchShift: []
  };

  constructor(public EmpServ:EmployeeService,public route:Router) { }
  public SupplierItemsList: SupItem[] =[
    {id:1 , name:'nada',ItemsForSupplier:[]},
    {id:2 , name:'Al-marai',ItemsForSupplier:[]}

  ];

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

  AddSupItem(index:number,item_id:number , item_name:String , item_price:number , item_desc:String , ite_per_carton:number){
    this.SupplierItemsList[index].ItemsForSupplier.push({ID:item_id , Name:item_name, Price:item_price,Description:item_desc,itemsPerCartoon:ite_per_carton})
  }

  Employee(id){
    this.EmpServ.getEmployee(id).subscribe(emp => {
              if(emp){
              this.emp = emp.data();
              console.log(emp)
              this.route.navigateByUrl('/Employee/welcome');
              }
            });
  }


}

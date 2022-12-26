import { Component, OnInit } from '@angular/core'; 
import { supplier, SupServiceService } from '../sup-service.service';


@Component({
  selector: 'app-add-sup',
  templateUrl: './add-sup.page.html',
  styleUrls: ['./add-sup.page.scss'],
})
export class AddSupPage implements OnInit {

  
  // this array will have the variables of suppliers (ID, name and phone )
   supAdd: supplier = {  id : '',
                        name : '',
                        phone: '',
                        pass: '',
                        items: [],
                        Requests:[]
                      };







    constructor(private data: SupServiceService) {}
    
  ngOnInit() {
  }


  insert(){
    this.data.addsup(this.supAdd);
    this.rest();
  }
    
  rest(){
    this.supAdd = {  id : '',
                        name : '',
                        phone: '',
                        pass: '',
                        items: [],
                        Requests:[]
                      };
  }

}

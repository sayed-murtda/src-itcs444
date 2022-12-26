import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';
import { DataService } from '../../../data.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  username='';
  password='';
  name:any;
  usertype;
  constructor(public route: Router,public menuCtrl: MenuController,public user:UserService,public dataSrv:DataService) { 
    this.menuCtrl.enable(false);

 

  }

  ngOnInit() {
  }

  Login(){

    this.user.SignIn(this.username, this.password).then( ()=>{
      this.UserType(this.username)
    })
    .catch( ()=>{
      alert("SignIn Incorrect username or password");
    });

  }
  next(){
    this.dataSrv.Userstype="admin";
    this.menuCtrl.enable(true);
    this.route.navigateByUrl('/items');

  }


  UserType(id) {
    this.user.getuser(id).subscribe((docRef) => { 
        let type =docRef.data()?.type;
        if(type){
          this.menuCtrl.enable(true);
          this.dataSrv.Userstype=type;
          if(type=='employee' || type=='Casher'   ){
            this.dataSrv.Employee(id);
          }else if(type=='owner'){
            this.route.navigateByUrl('/items');
          }
      }else{
        alert('error');
     }
    })

  }
    




}

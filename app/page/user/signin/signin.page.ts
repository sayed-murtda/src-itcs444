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


  UserType(id) {
        if (id) {
          this.user.getuser(id).subscribe(user => {
            if(user?.type){
              this.menuCtrl.enable(true);
              this.dataSrv.Userstype=user.type;
              if(user?.type=='employee' || user?.type=='Casher'  || user?.type=='supervisors'  ){
                this.dataSrv.Employee(id);
              }else if(user?.type=='owner'){
                this.route.navigateByUrl('/items');
              }
              else{
              this.route.navigateByUrl('/items');
              }
            }
          });
        }
      }
    




}

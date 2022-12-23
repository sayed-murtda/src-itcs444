import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  username='';
  password='';
  constructor(public route: Router,public menuCtrl: MenuController,public user:UserService) { 
    this.menuCtrl.enable(false);

  }

  ngOnInit() {
  }

  Login(){
      this.menuCtrl.enable(true);
      this.user.SignUp(this.username, this.password).then( ()=>{
      this.route.navigateByUrl('/items');
    })
    .catch( ()=>{
      alert("SignIn Incorrect username or password");
    });
    // let a=this.user.cheackuser(this.username,this.password);
    // if(a>-1){
    // this.menuCtrl.enable(true);
    // this.route.navigateByUrl('/items');
    // }else
    // alert('not')
  }



}

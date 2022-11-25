import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  username='';
  password='';
  constructor(public route: Router,public menuCtrl: MenuController,public user:DataService) { 
    this.menuCtrl.enable(false);

  }

  ngOnInit() {
  }

  Login(){
      this.menuCtrl.enable(true);
    this.route.navigateByUrl('/items');
    // let a=this.user.cheackuser(this.username,this.password);
    // if(a>-1){
    // this.menuCtrl.enable(true);
    // this.route.navigateByUrl('/items');
    // }else
    // alert('not')
  }



}

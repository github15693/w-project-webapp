import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

//services
import {UserDAL, RoleDAL, TechnologyDAL, PlatformDAL} from '../shared/index'
import replace = require("core-js/fn/symbol/replace");

/**
 *  This class represents the lazy loaded LoginComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  username = "";
  pwd = "";
  validationMessage = false;
  constructor(private accountDAL: UserDAL, private roleDAL: RoleDAL, private techDAL: TechnologyDAL, private platformDAL: PlatformDAL, private router: Router) {
    if(this.accountDAL.getCurrentUser() != null){
      this.router.navigate(['/dashboard/projects']);
    }
    // this.initializeData();
  }

  signIn() {
    this.accountDAL.signIn(this.username, this.pwd, (user: any)=>{
      this.router.navigate(['/dashboard/projects'])
    }, (user: any, err: any)=>{
      this.validationMessage = err.message.replace("username", "email");
    });
  }

  initializeData(){
    //initialize role and users
    this.roleDAL.createRole("PM", "Project manager").then((data) => {
      this.accountDAL.createUser("Khang Tran", data, "khangtran@innoria.com", "12345678", "khangtran",
        new Date(), "0939649769", "01687683941", "Binh Hung, Binh Chanh, HCM", (response: any)=>{
        });
    });
    this.roleDAL.createRole("BA", "Bussiness Analysis").then((data) => {
      this.accountDAL.createUser("Kim Tran", data, "kimtran@innoria.com", "12345678", "thienkim3006",
        new Date(), "0939649769", "01687683941", "Binh Hung, Binh Chanh, HCM", (response: any)=>{
        });
    });
    this.roleDAL.createRole("DEV", "Developer").then((data) => {
      this.accountDAL.createUser("Khanh Nguyen", data, "khanhnguyen@innoria.com", "12345678", "khanhnguyen1303",
        new Date(), "0939649769", "01687683941", "Binh Hung, Binh Chanh, HCM", (response: any)=>{
        });
    });
    this.roleDAL.createRole("PM", "Project manager").then((data) => {
      this.accountDAL.createUser("Khanh Duong", data, "khanhduong@innoria.com", "12345678", "hongkhanh130393",
        new Date(), "0939649769", "01687683941", "Binh Hung, Binh Chanh, HCM", (response: any)=>{
        });
    });
    this.roleDAL.createRole("QC", "Quality Control").then((data) => {
      this.accountDAL.createUser("Tuyet Bui", data, "tuyetbui@innoria.com", "12345678", "tuyetbui",
        new Date(), "0939649769", "01687683941", "Binh Hung, Binh Chanh, HCM", (response: any)=>{
        });
    });
    this.roleDAL.createRole("BA", "Bussiness Analysis").then((data) => {
      this.accountDAL.createUser("Nguyen Du", data, "nguyendu@innoria.com", "12345678", "nguyendu",
        new Date(), "0939649769", "01687683941", "Binh Hung, Binh Chanh, HCM", (response: any)=>{
        });
    });
    this.roleDAL.createRole("DEV", "Developer").then((data) => {
      this.accountDAL.createUser("Phong Do", data, "phongdo@innoria.com", "12345678", "phongdo",
        new Date(), "0939649769", "01687683941", "Binh Hung, Binh Chanh, HCM", (response: any)=>{
        });
    });
    this.roleDAL.createRole("QC", "Quality Control").then((data) => {
      this.accountDAL.createUser("Tho Dinh", data, "thodinh@innoria.com", "12345678", "thodinh",
        new Date(), "0939649769", "01687683941", "Binh Hung, Binh Chanh, HCM", (response: any)=>{
        });
    });

    //initialize platforms
    this.platformDAL.createPlatform("Server", "Server developer");
    this.platformDAL.createPlatform("Website", "Website developer");
    this.platformDAL.createPlatform("Android", "Android developer");
    this.platformDAL.createPlatform("iOS", "iOS developer");

    //initialize technologies
    this.techDAL.createTechnology("Android", "Android developer language");
    this.techDAL.createTechnology("Objective C", "iOS developer language");
    this.techDAL.createTechnology("Swift 2", "iOS developer language");
    this.techDAL.createTechnology("Parse", "Platform");


  }

}

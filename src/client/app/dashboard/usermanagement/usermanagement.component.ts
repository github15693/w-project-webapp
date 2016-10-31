import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import {UserDAL} from "../../shared/services/dal/user";

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'usermanagement.component.html'
})

export class UserManagementComponent {
  @ViewChild('CreateUserModal') public createModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

  //form data binding
  modalTitle = "User information";
  userName = "";
  userRole = "";
  userEmail = "";
  userSkype = "";
  userDay = "";
  userPhone1 = "";
  userPhone2 = "";
  userAddress = "";

  constructor(private user: UserDAL){
    this.user.getusers();
  }

  saveUser(){
    this.user.createUser(
      this.userName, this.userRole, this.userEmail, this.userSkype,
      this.userDay, this.userPhone1, this.userPhone2, this.userAddress, (response: any)=>{
          if(response){
            this.createModal.hide();
          }
      });
  }
}

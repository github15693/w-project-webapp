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
  @ViewChild('ConfirmDeleteModal') public deleteModal:ModalDirective;


  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

  //form data binding
  modalTitle = "User information";
  userFullName = "";
  userRole = "";
  userEmail = "";
  userName = "";
  userPass = "";
  userSkype = "";
  userBirthDay = "";
  userPhone1 = "";
  userPhone2 = "";
  userAddress = "";

  users: any;
  userKeys: any;

  currentObjectId: any;

  constructor(private user: UserDAL){
    this.getUsers();
    this.userKeys = this.user.userKeys;
  }

  saveUser(){
    this.user.createUser(
      this.userFullName, this.userRole, this.userEmail, this.userPass, this.userSkype,
      this.userBirthDay, this.userPhone1, this.userPhone2, this.userAddress, (response: any)=>{
          if(response){
            this.createModal.hide();
            this.getUsers();
          }
      });
  }

  getUsers(){
    this.user.getUsers().then((data: any) => {
      data.forEach((user: any) => {
        //merge role name
        var roleMultiMerge = "";
        for(let i = 0; i < user.get("role").length; i++){
          roleMultiMerge += user.get("role")[i].get("name");
          if(i < user.get("role").length -1){
            roleMultiMerge += ", ";
          }
        }
        user["roleMultiMerge"] = roleMultiMerge;
      });
      this.users = data;
    });
  }

  showUpdateModal(technologyId: any){
    this.currentObjectId = technologyId;
    this.createModal.show();
    var user: any;
    user = this.getObjectById(technologyId);
    if (user != null){
      this.userFullName = user.get();
      this.userRole = "";
      this.userEmail = "";
      this.userName = "";
      this.userPass = "";
      this.userSkype = "";
      this.userBirthDay = "";
      this.userPhone1 = "";
      this.userPhone2 = "";
      this.userAddress = "";
    }
  }

  showDeleteModal(technologyId: any){
    this.currentObjectId = technologyId;
    this.deleteModal.show();
  }

  getObjectById(objectId: any){
    var _user: any;
    this.users.forEach((user: any) =>{
      if (user.id == objectId){
        _user = user;
        return false;
      }
    });
    return _user;
  }


}

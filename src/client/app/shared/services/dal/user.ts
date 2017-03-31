/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services';
@Injectable()
export class UserDAL {
  Parse: ParseSDK;

  //key map with parse columns User table in Parse
  private table_name_key = "_User";
  private id_key = "objectId";
  private username_key = "username";
  private fullname_key = "name";
  private password_key = "password";
  private role_key = "role";
  private email_key = "email";
  private skype_key = "skype";
  private birthday_key = "birthday";
  private phone_1_key = "phone_1";
  private phone_2_key = "phone_2";
  private address_key = "address";
  private updated_at_key = "updatedAt";
  private created_at_key = "createdAt";

  public userKeys: any = {};

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init UserDAL success.");

    //create keys
    this.userKeys[this.table_name_key] = this.table_name_key;
    this.userKeys[this.id_key] = this.id_key;
    this.userKeys[this.username_key] = this.username_key;
    this.userKeys[this.fullname_key] = this.fullname_key;
    this.userKeys[this.password_key] = this.password_key;
    this.userKeys[this.role_key] = this.role_key;
    this.userKeys[this.email_key] = this.email_key;
    this.userKeys[this.skype_key] = this.skype_key;
    this.userKeys[this.birthday_key] = this.birthday_key;
    this.userKeys[this.phone_1_key] = this.phone_1_key;
    this.userKeys[this.phone_2_key] = this.phone_2_key;
    this.userKeys[this.address_key] = this.address_key;
    this.userKeys[this.updated_at_key] = this.updated_at_key;
    this.userKeys[this.created_at_key] = this.created_at_key;
  }

  getUsers(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      obj.include("role");
      return obj;
    });
  }

  createUser(userFullName: any, userRole: any, userEmail: any, userPass: any, userSkype: any,
          userBirthday: any, userPhone1: any, userPhone2: any, userAddress: any, handleResponse: Function){
    var user = this.Parse.newUser(); //Parse.User() ;
    user.set(this.fullname_key, userFullName);
    user.set(this.role_key, userRole);
    user.set(this.email_key, userEmail);
    user.set(this.username_key, userEmail);
    user.set(this.password_key, userPass);
    user.set(this.skype_key, userSkype);
    user.set(this.birthday_key, userBirthday);
    user.set(this.phone_1_key, userPhone1);
    user.set(this.phone_2_key, userPhone2);
    user.set(this.address_key, userAddress);
    user.signUp(null, {
      success: function(user: any) {
        // Hooray! Let them use the app now.
      },
      error: function(user: any, error: any) {
        // Show the error message somewhere and let the user try again.
        console.log("Error: " + error.code + " " + error.message);
      }
    });
    handleResponse(true);
  }

  public signIn(email: String, pwd: String, handleSuc: any, handdleErr: any){
    this.Parse.user().logIn(email, pwd,{
      success: (user: any) => {
        handleSuc(user);
      },
      error: (user: any, err: any)=>{
        handdleErr(user, err);
      }
    });
  }

  getCurrentUser(){
    return this.Parse.currentUser();
  }

  public signOut(){
    return this.Parse.user().logOut();
  }


}

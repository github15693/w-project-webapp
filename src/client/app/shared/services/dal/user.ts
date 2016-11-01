/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services';
@Injectable()
export class UserDAL {
  Parse: ParseSDK;

  //key map with parse columns User table in Parse
  private table_name_key = "_User"
  private id_key = "objectId";
  private username_key = "username";
  private password_key = "password";
  private role_key = "role";
  private email_key = "email";
  private skype_key = "skype";
  private day_key = "day";
  private phone_1_key = "phone_1";
  private phone_2_key = "phone_2";
  private address_key = "address";

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init UserDAL success.");
  }

  getUsers(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }

  getUser(){

  }

  createUser(userName: any, userRole: any, userEmail: any, userSkype: any,
          userDay: any, userPhone1: any, userPhone2: any, userAddress: any, handleResponse: Function){
    var user = this.Parse.user(); //Parse.User() ;
    user.set(this.username_key, userName);
    user.set(this.password_key, "12345678");
    user.set(this.role_key, userRole);
    user.set(this.email_key, userEmail);
    user.set(this.skype_key, userSkype);
    user.set(this.day_key, userDay);
    user.set(this.phone_1_key, userPhone1);
    user.set(this.phone_2_key, userPhone2);
    user.set(this.address_key, userAddress);
    console.log(user);
    user.signUp(null, {
      success: function(user: any) {
        // Hooray! Let them use the app now.
      },
      error: function(user: any, error: any) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
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
    // return this.Parse.query('User', (obj: any)=>{
    //   obj.equalTo(this.email_key, email);
    //   obj.equalTo(this.password_key, pwd);
    //   return obj;
    // })
  }

  getCurrentUser(){
    return this.Parse.currentUser();
  }

  public signOut(){
    return this.Parse.user().logOut();
  }

}

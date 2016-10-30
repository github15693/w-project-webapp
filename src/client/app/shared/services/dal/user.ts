/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class UserDAL {
  Parse: ParseSDK;

  //key map with parse columns User table in Parse
  private table_name_key = "_User"
  private id_key = "objectId";
  private name_key = "username";
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

  getusers(){

  }

  getUser(){

  }

  createUser(userName: any, userRole: any, userEmail: any, userSkype: any,
          userDay: any, userPhone1: any, userPhone2: any, userAddress: any){
    var Parse;
    var user = new Parse.User();
    user.set(this.name_key, userName);
    user.set(this.password_key, "12345678");
    user.set(this.role_key, userRole);
    user.set(this.email_key, userEmail);
    user.set(this.skype_key, userSkype);
    user.set(this.day_key, userDay);
    user.set(this.phone_1_key, userPhone1);
    user.set(this.phone_2_key, userPhone2);
    user.set(this.address_key, userAddress);

    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
}

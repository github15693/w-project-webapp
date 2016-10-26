/**
 * Created by khanhduong on 10/26/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class AccountDAL{
  Parse: ParseSDK;

  //key map with parse columns
  private id_key = "objectId"
  private email_key = "email"
  private password_key = "password"
  private username_key = "username"
  private udpated_at_key = "updatedAt"
  private created_at_key = "createdAt"

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init AccountDAL success.");
  }



}

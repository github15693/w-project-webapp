/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class RoleDAL {
  Parse: ParseSDK;

  //key map with parse columns
  private table_name_key = "Roles"


  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init RoleDAL success.");
  }

  initFixedData(){

  }

  getRoles(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }

}

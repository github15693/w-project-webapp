/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class RoleDAL {
  Parse: ParseSDK;

  //key map with parse columns
  private table_name_key = "Projects"


  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init RoleDAL success.");
  }

  initFixedData(){

  }

}

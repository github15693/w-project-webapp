/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class PlatformDAL {
  Parse: ParseSDK;

  //key map with parse columns Customer table in Parse
  private table_name_key = "Platforms"

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init PlatformDAL success.");
  }

  getPlatforms(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }
}

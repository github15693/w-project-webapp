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
  private id_key = "objectId";
  private name_key = "name";
  private des_key = "des";
  private updated_at_key = "updatedAt";
  private created_at_key = "createdAt";

  public platformKeys: any = {};

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init PlatformDAL success.");

    //init keys
    this.platformKeys[this.table_name_key] = this.table_name_key;
    this.platformKeys[this.id_key] = this.id_key;
    this.platformKeys[this.name_key] = this.name_key;
    this.platformKeys[this.des_key] = this.des_key;
    this.platformKeys[this.updated_at_key] = this.updated_at_key;
    this.platformKeys[this.created_at_key] = this.created_at_key;
  }

  getPlatforms(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }

  createPlatform(name: any, des: any){
    var data: any;
    data = {};
    data[this.name_key] = name;
    data[this.des_key] = des;
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), data, true);
  }

}

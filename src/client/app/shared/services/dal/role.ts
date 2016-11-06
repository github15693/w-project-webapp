/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class RoleDAL {
  Parse: ParseSDK;

  //key map with parse columns
  private table_name_key = "Roles";
  private id_key = "objectId";
  private name_key = "name";
  private des_key = "des";
  private updated_at_key = "updatedAt";
  private created_at_key = "createdAt";

  //init keys
  public roleKeys: any = {};
  public hardCodeRole: any = {
    "PM" : "PM",
    "BA" : "BA",
    "DEV" : "DEV",
    "QC" : "QC"
  }

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init RoleDAL success.");

    //init keys
    this.roleKeys[this.table_name_key] = this.table_name_key;
    this.roleKeys[this.id_key] = this.id_key;
    this.roleKeys[this.name_key] = this.name_key;
    this.roleKeys[this.des_key] = this.des_key;
    this.roleKeys[this.updated_at_key] = this.updated_at_key;
    this.roleKeys[this.created_at_key] = this.created_at_key;
  }

  createRole(name: any, des: any){
    var data: any;
    data = {};
    data[this.name_key] = name;
    data[this.des_key] = des;
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), data, true);
  }

  getRoles(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }

}

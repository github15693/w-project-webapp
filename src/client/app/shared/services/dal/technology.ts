/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class TechnologyDAL {
  Parse: ParseSDK;

  //key map with parse columns Technology table in Parse
  private table_name_key = "Technologies";
  private id_key = "objectId";
  private name_key = "name";
  private des_key = "des";
  private updated_at_key = "updatedAt";
  private created_at_key = "createdAt";

  public techKeys: any = {};

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init();
    console.log("init TechnologyDAL success.");

    //init keys
    this.techKeys[this.table_name_key] = this.table_name_key;
    this.techKeys[this.id_key] = this.id_key;
    this.techKeys[this.name_key] = this.name_key;
    this.techKeys[this.des_key] = this.des_key;
    this.techKeys[this.updated_at_key] = this.updated_at_key;
    this.techKeys[this.created_at_key] = this.created_at_key;
  }

  getTechnologies(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }

  createTechnology(name: any, des: any){
    var data: any;
    data = {};
    data[this.name_key] = name;
    data[this.des_key] = des;
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), data, true);
  }

  updateTechnology(technologyObject: any){
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), technologyObject, true);
  }
}

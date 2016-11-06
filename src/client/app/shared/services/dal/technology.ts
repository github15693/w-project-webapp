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

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init();
    console.log("init TechnologyDAL success.");
  }

  getTechnologies(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }

  getTechnology(id: String){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      obj.equalTo(this.id_key, id);
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

}

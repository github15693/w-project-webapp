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

  }

  getTechnology(){

  }

  createTechnology(techName: any, techDes: any){
    var data = {};
    data[this.name_key] = techName;
    data[this.des_key] = techDes;
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), data, true);
  }

}

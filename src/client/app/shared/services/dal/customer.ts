/**
 * Created by khanhduong on 10/30/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class CustomerDAL {
  Parse: ParseSDK;

  //key map with parse columns Customer table in Parse
  private table_name_key = "Customers"
  private id_key = "objectId";
  private name_key = "name";
  private company_key = "company";
  private email_key = "email";
  private skype_key = "skype";
  private phone_key = "phone";
  private address_key = "address";
  private country_key = "country";

  public cusKeys: any = {};


  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init CustomerDAL success.");

    //init keys
    this.cusKeys[this.table_name_key] = this.table_name_key;
    this.cusKeys[this.id_key] = this.id_key;
    this.cusKeys[this.name_key] = this.name_key;
    this.cusKeys[this.company_key] = this.company_key;
    this.cusKeys[this.email_key] = this.email_key;
    this.cusKeys[this.skype_key] = this.skype_key;
    this.cusKeys[this.phone_key] = this.phone_key;
    this.cusKeys[this.address_key] = this.address_key;
    this.cusKeys[this.country_key] = this.country_key;

  }

  getCustomers(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }

  createCustomer(name: any, company: any, email: any, skype: any,
                phone: any, address: any, country: any){
    var data: any;
    data = {};
    data[this.name_key] = name;
    data[this.company_key] = company;
    data[this.email_key] = email;
    data[this.skype_key] = skype;
    data[this.phone_key] = phone;
    data[this.address_key] = address;
    data[this.country_key] = country;
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), data, true);
  }

  updateCustomer(customerObject: any){
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), customerObject, true);
  }
}

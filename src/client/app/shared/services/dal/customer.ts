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

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init CustomerDAL success.");
  }

  createCustomer(cusName: any, cusCompany: any, cusEmail: string,
                 cusSkype: any, cusPhone: any, cusAddress: any, cusCountry: any){
    var data = {};
    data[this.name_key] = cusName;
    data[this.company_key] = cusCompany;
    data[this.email_key] = cusEmail;
    data[this.skype_key] = cusSkype;
    data[this.phone_key] = cusPhone;
    data[this.address_key] = cusAddress;
    data[this.country_key] = cusCountry;

    return this.Parse.setData(this.Parse.newObject(this.table_name_key), data, true);
  }

  getCustomers(){

  }

  getCustomer(){

  }
}

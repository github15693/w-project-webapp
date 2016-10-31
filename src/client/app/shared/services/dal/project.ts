/**
 * Created by khanhduong on 10/28/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class ProjectDAL{
  Parse: ParseSDK;

  //key map with parse columns
  private table_name_key = "Projects"
  private id_key = "objectId"
  private project_id_key = "projectId"
  private name_key = "name"
  private customer_key = "customer"
  private pm_key = "pm"
  private ba_est_key = "baEst"
  private ba_ba_key = "baBA"
  private dev_est_key = "devEst"
  private dev_dev_key = "devDev"
  private qc_key = "qc"
  private status_key = "status"
  private tech_key = "tech"
  private platform_key = "platform"
  private start_at_key = "startAt"
  private end_at_key = "endAt"
  private updated_at_key = "updatedAt"
  private created_at_key = "createdAt"

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init ProjectDAL success.");
  }

  getProjects(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      return obj;
    });
  }

  getProject(id: String){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      obj.equalTo(this.id_key, id);
      return obj;
    });
  }

  createProject(name: any, customer: any, pm: any, baEst: any, baBA: any, devEst: any, devDev: any,
                qc: any, status: any, platform: any, tech: any, startAt: any, endAt: any){

    var data: any;
    data = {};
    data[this.name_key] = name;
    data[this.customer_key] = customer;
    data[this.pm_key] = pm;
    data[this.ba_est_key] = baEst;
    data[this.ba_ba_key] = baBA;
    data[this.dev_est_key] = devEst;
    data[this.dev_dev_key] = devDev;
    data[this.qc_key] = qc;
    data[this.status_key] = status;
    data[this.platform_key] = platform;
    data[this.tech_key] = tech;
    data[this.start_at_key] = startAt;
    data[this.end_at_key] = endAt;
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), data, true);

  }

}

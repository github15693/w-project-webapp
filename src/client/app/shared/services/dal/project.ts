/**
 * Created by khanhduong on 10/28/16.
 */
import { Injectable, Inject } from '@angular/core';
import {ParseSDK} from '../parse-sdk-services'
@Injectable()
export class ProjectDAL{
  Parse: ParseSDK;

  //key map with parse columns
  private table_name_key = "Projects";
  private id_key = "objectId";
  private project_id_key = "projectId";
  private name_key = "name";
  private customer_key = "customer";
  private pm_key = "pm";
  private ba_est_key = "baEst";
  private ba_ba_key = "baBA";
  private dev_est_key = "devEst";
  private dev_dev_key = "devDev";
  private qc_key = "qc";
  private status_key = "status";
  private tech_key = "tech";
  private platform_key = "platform";
  private start_at_key = "startAt";
  private end_at_key = "endAt";
  private updated_at_key = "updatedAt";
  private created_at_key = "createdAt";

  //project status
  private status_new = "New";
  private status_ready_for_estimation = "Ready for estimaion";
  private status_ready_for_approve = "Ready for approve";
  private status_pedding = "Pedding";
  private status_in_proccess = "In proccess";
  private status_success = "Success";
  private status_fail = "Fail";

  projectKeys: any = {};
  projectStatus: any = {};

  constructor(@Inject(ParseSDK) Parse: ParseSDK){
    this.Parse = Parse;
    this.Parse.init()
    console.log("init ProjectDAL success.");

    //init keys
    this.projectKeys[this.table_name_key] = this.table_name_key;
    this.projectKeys[this.id_key] = this.id_key;
    this.projectKeys[this.project_id_key] = this.project_id_key;
    this.projectKeys[this.name_key] = this.name_key;
    this.projectKeys[this.customer_key] = this.customer_key;
    this.projectKeys[this.pm_key] = this.pm_key;
    this.projectKeys[this.ba_est_key] = this.ba_est_key;
    this.projectKeys[this.ba_ba_key] = this.ba_ba_key;
    this.projectKeys[this.dev_est_key] = this.dev_est_key;
    this.projectKeys[this.dev_dev_key] = this.dev_dev_key;
    this.projectKeys[this.qc_key] = this.qc_key;
    this.projectKeys[this.status_key] = this.status_key;
    this.projectKeys[this.tech_key] = this.tech_key;
    this.projectKeys[this.platform_key] = this.platform_key;
    this.projectKeys[this.start_at_key] = this.start_at_key;
    this.projectKeys[this.end_at_key] = this.end_at_key;
    this.projectKeys[this.updated_at_key] = this.updated_at_key;
    this.projectKeys[this.created_at_key] = this.created_at_key;

    //init status
    this.projectStatus[this.status_new] = this.status_new;
    this.projectStatus[this.status_ready_for_estimation] = this.status_ready_for_estimation;
    this.projectStatus[this.status_ready_for_approve] = this.status_ready_for_approve;
    this.projectStatus[this.status_pedding] = this.status_pedding;
    this.projectStatus[this.status_in_proccess] = this.status_in_proccess;
    this.projectStatus[this.status_success] = this.status_success;
    this.projectStatus[this.status_fail] = this.status_fail;

  }

  getProjects(){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      obj.include("customer");
      obj.include("pm");
      obj.include("baEst");
      obj.include("baBA");
      obj.include("devEst");
      obj.include("devDev");
      obj.include("qc");
      obj.include("platform");
      obj.include("tech");
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

  getStatusList(){
    var statusList: Array<any> = [];
    for (var key in this.projectStatus){
      statusList.push(this.projectStatus[key]);
    }
    return statusList;
  }

}

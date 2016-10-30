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
  private ba_key = "ba"
  private dev_key = "dev"
  private status_key = "status"
  private tech_key = "tech"
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

  getProject(projectId: String){
    return this.Parse.query(this.table_name_key, (obj: any)=>{
      obj.equalTo(this.id_key, projectId);
      return obj;
    })
  }

  createProject(){
    var data = {};
    data[this.project_id_key] = "WProj";
    data[this.name_key] = "W Project";
    data[this.customer_key] = this.Parse.currentUser();
    data[this.project_id_key] = "";
    data[this.pm_key] = this.Parse.currentUser();
    data[this.ba_key] = this.Parse.currentUser();
    data[this.dev_key] = [this.Parse.currentUser(), this.Parse.currentUser(), this.Parse.currentUser()];
    data[this.status_key] = "Done";
    data[this.tech_key] = "Angular 2, NodeJS, Bootstrap 4";
    data[this.start_at_key] = "";
    data[this.end_at_key] = "";
    return this.Parse.setData(this.Parse.newObject(this.table_name_key), data, true);
  }

}

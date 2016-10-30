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
  private udpated_at_key = "updatedAt"
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

  }

}

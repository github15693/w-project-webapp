import {Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import {Router} from '@angular/router';
import {ProjectDAL, CustomerDAL, UserDAL, PlatformDAL, TechnologyDAL, RoleDAL} from "../../shared/index"

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'project.component.html'
})



export class ProjectComponent {
  @ViewChild('ProjectModal') public ProjectModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

  //list data
  public projects: any;
  public allUserList: any;
  public allCusList: any = [];
  public allTechList: any = [];
  public allRoleList: any = [];
  public allPlatformList: any = [];
  public baList:Array<any> = [];
  public baEstList:Array<any> = [];
  public baBaList:Array<any> = [];
  public pmList:Array<any> = [];
  public devList:Array<any> = [];
  public devEstList:Array<any> = [];
  public devDevList:Array<any> = [];
  public qcList:Array<any> = [];
  public cusList: Array<any> = [];

  //list value


  public platformList:Array<any> = [];
  public techList:Array<any> = [];
  public roleList:Array<any> = [];
  public statusList:Array<any> = [];

  //select value
  public cusListValue: any = [];

  //keys
  public projectKeys: any;
  public userKeys: any;
  public roleKeys: any;
  public cusKeys: any;
  public platformKeys: any;
  public techKeys: any;

  //default data
  public hardCodeRole: any = {};

  //form data
  modalTitle = "Project information";
  projectName = "";
  projectCustomer: any = [];
  projectPM: any = [];
  projectBAEst: any = [];
  projectBABA: any = [];
  projectDevEst: any = [];
  projectDevEst: any = [];
  projectDevDev: any = [];
  projectQC: any = [];
  projectStatus = "New";
  projectPlatform: any = [];
  projectTech: any = [];
  projectStartDate = "";
  projectEndDate = "";

  constructor(private projectDAL: ProjectDAL, private userDAL: UserDAL, private customerDAL: CustomerDAL,
              private platformDAL: PlatformDAL, private technologyDAL: TechnologyDAL,
              private roleDAL: RoleDAL, private router: Router, private changeDetect: ChangeDetectorRef) {
    //init keys
    this.projectKeys = this.projectDAL.projectKeys;
    this.userKeys = this.userDAL.userKeys;
    this.roleKeys = this.roleDAL.roleKeys;
    this.cusKeys = this.customerDAL.cusKeys;
    this.platformKeys = this.platformDAL.platformKeys
    this.techKeys = this.technologyDAL.techKeys

    //init default data
    this.hardCodeRole = this.roleDAL.hardCodeRole;

    //get all list project
    this.getProjects();

    //get list user
    this.userDAL.getUsers().then((data: any) => {
      this.allUserList = data;
      var pmListTemp: any = [];
      var baListTemp: any = [];
      var devListTemp: any = [];
      var qcListTemp: any = [];
      this.allUserList.forEach((user: any) => {
        var item: any = {};
        if(user.get(this.userKeys.role).get(this.roleKeys.name) == this.hardCodeRole.PM){
          item["id"] = user.id;
          item["text"] = user.get(this.userKeys.name);
          pmListTemp.push(item);
        }
        if(user.get(this.userKeys.role).get(this.roleKeys.name) == this.hardCodeRole.BA){
          item["id"] = user.id;
          item["text"] = user.get(this.userKeys.name);
          baListTemp.push(item);
        }
        if(user.get(this.userKeys.role).get(this.roleKeys.name) == this.hardCodeRole.DEV){
          item["id"] = user.id;
          item["text"] = user.get(this.userKeys.name);
          devListTemp.push(item);
        }
        if(user.get(this.userKeys.role).get(this.roleKeys.name) == this.hardCodeRole.QC){
          item["id"] = user.id;
          item["text"] = user.get(this.userKeys.name);
          qcListTemp.push(item);
        }
      });
      this.pmList = pmListTemp;
      this.baList = baListTemp;
      this.baEstList = baListTemp;
      this.baBaList = baListTemp;
      this.devList = devListTemp;
      this.devEstList = devListTemp;
      this.devDevList = devListTemp;
      this.qcList = qcListTemp;
    });
    //get list customer
    this.customerDAL.getCustomers().then((data: any) => {
      this.allCusList = data;
      this.cusList = this.prepareSelectDataList(data, this.cusKeys.name);
    });
    //get list platform
    this.platformDAL.getPlatforms().then((data: any) => {
      this.allPlatformList = data;
      this.platformList = this.prepareSelectDataList(data, this.platformKeys.name);
    });
    //get list technology
    this.technologyDAL.getTechnologies().then((data: any) => {
      this.allTechList = data;
      this.techList = this.prepareSelectDataList(data, this.techKeys.name);;
    });
    //get list role
    this.roleDAL.getRoles().then((data: any) => {
      this.allRoleList = data;
      this.roleList = this.prepareSelectDataList(data, this.roleKeys.name);
    });
    //get project status list
    this.statusList = this.projectDAL.getStatusList();
  }

  //save project
  saveProject(){
    this.projectDAL.createProject(
      this.projectName, this.projectCustomer, this.projectPM, this.projectBAEst, this.projectBABA,
      this.projectDevEst, this.projectDevDev, this.projectQC, this.projectStatus, this.projectPlatform,
      this.projectTech, this.projectStartDate, this.projectEndDate
    ).then((data: any) => {
      console.log(data);
      this.ProjectModal.hide();
      this.getProjects();
    });
  }

  //get list projects
  getProjects(){
    this.projectDAL.getProjects().then((data: any) => {
      data.forEach((proj: any) => {
        //merge customer name
        var cusMultiMerge = "";
        for(let i = 0; i < proj.get("customer").length; i++){
          cusMultiMerge += proj.get("customer")[i].get(this.cusKeys.name);
          if(i < proj.get("customer").length -1){
            cusMultiMerge += ", ";
          }
        }
        proj["cusMultiMerge"] = cusMultiMerge;
        //merge pm name
        var pmMultiMerge = "";
        for(let i = 0; i < proj.get("pm").length; i++){
          pmMultiMerge += proj.get("pm")[i].get(this.userKeys.name);
          if(i < proj.get("pm").length -1){
            pmMultiMerge += ", ";
          }
        }
        proj["pmMultiMerge"] = pmMultiMerge;
      });
      this.projects = data;
      console.log(this.projects);
    });
  }

  public updateProject(projectId: any){
    this.ProjectModal.show();
    this.projects.forEach((proj: any) => {
      if(proj.id == projectId){
        this.projectName = proj.get(this.projectKeys.name);
        this.projectCustomer = proj.get(this.projectKeys.customer);
        this.cusListValue = this.prepareSelectDataList(proj.get(this.projectKeys.customer), this.cusKeys.name);
        return;
      }
    });
  }

  public baFilterSelected(value:any):void {
    console.log('BA selected value is: ', value);
  }

  public baEstSelected(value:any):void {
    this.addSelectValue(value, this.allUserList, this.projectBAEst);
  }
  public baEstRemove(value:any):void {
    this.removeSelectValue(value, this.projectBAEst);
  }

  public baBaSelected(value:any):void {
    this.addSelectValue(value, this.allUserList, this.projectBABA);
  }
  public baBaRemove(value:any):void {
    this.removeSelectValue(value, this.projectBABA);
  }

  public pmFilterSelected(value:any):void {
    console.log('PM selected value is: ', value);
  }

  public pmFormSelected(value:any):void {
    this.addSelectValue(value, this.allUserList, this.projectPM);
  }
  public pmFormRemove(value:any):void {
    this.removeSelectValue(value, this.projectPM);
  }

  public devFilterSelected(value:any):void {
    console.log('DEV selected value is: ', value);
  }

  public devEstSelected(value:any):void {
    this.addSelectValue(value, this.allUserList, this.projectDevEst);
  }
  public devEstRemove(value:any):void {
    this.removeSelectValue(value, this.projectDevEst);
  }

  public devDevSelected(value:any):void {
    this.addSelectValue(value, this.allUserList, this.projectDevDev);
  }
  public devDevRemove(value:any):void {
    this.removeSelectValue(value, this.projectDevDev);
  }

  public qcSelected(value:any):void {
    this.addSelectValue(value, this.allUserList, this.projectQC);
  }
  public qcRemove(value:any):void {
    this.removeSelectValue(value, this.projectQC);
  }

  public cusFilterSelected(value:any):void {
    console.log('Cus selected value is: ', value);
  }

  public cusFormSelected(value:any):void {
    this.addSelectValue(value, this.allCusList, this.projectCustomer);
  }

  public cusFormRemove(value:any):void {
    this.removeSelectValue(value, this.projectCustomer);
  }

  public techFilterSelected(value:any):void {
    console.log('Tech selected value is: ', value);
  }

  public techFormSelected(value:any):void {
    this.addSelectValue(value, this.allTechList, this.projectTech);
  }
  public techFormRemove(value:any):void {
    this.removeSelectValue(value, this.projectTech);
  }

  public roleSelected(value:any):void {
    console.log('Role selected value is: ', value);
  }

  public statusSelected(value:any):void {
    console.log('Status selected value is: ', value);
  }

  public platformFormSelected(value:any):void {
    this.addSelectValue(value, this.allPlatformList, this.projectPlatform);
  }
  public platformFormRemove(value:any):void {
    this.removeSelectValue(value, this.projectPlatform);
  }

  public roleRemoved(value:any):void {
    console.log('Removed value is: ', value);
  }

  /***
   *  Collect select data to save
   * @param value: data selected
   * @param listData: list parse object
   * @param formData: list object compare to save
   */
  public addSelectValue(value:any, listData: any, formData: any){
    listData.forEach((obj: any) => {
      if(obj.id == value.id){
        formData.push(obj);
        return;
      }
    });
    return formData;
  }

  /***
   *  Remove select data to save
   * @param value: data selected
   * @param formData: list object compare to save
   */
  public removeSelectValue(value:any, formData: any){
    var i = 0;
    formData.forEach((obj: any) => {
      if(obj.id == value.id){
        formData.splice(i, 1);
        return;
      }
      i += 1;
    });
    return formData;
  }

  public prepareSelectDataList(listObjects: any, textKey: any){
    var listData: any = [];
    listObjects.forEach((cus: any) => {
      var item: any = {};
      item["id"] = cus.id;
      item["text"] = cus.get(textKey);
      listData.push(item);
    });
    return listData;
  }

}

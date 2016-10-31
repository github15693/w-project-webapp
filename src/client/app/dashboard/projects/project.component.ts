import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import {ProjectDAL} from "../../shared/index"
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'project.component.html'
})



export class ProjectComponent {
  @ViewChild('childModal') public childModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

  public projects: any;

  //form data
  modalTitle = "Project information";
  projectName = "";
  projectCustomer = "";
  projectManager = "";
  projectBAEst = "";
  projectBABA = "";
  projectDevEst = "";
  projectDevDev = "";
  projectQC = "";
  projectStatus = "New";
  projectPlatform = "";
  projectTech = "";
  projectStartDate = "";
  projectEndDate = "";

  constructor(private project: ProjectDAL, private router: Router) {
    this.project.getProjects().then((data) => {
      this.projects = data;
    });

  }

  saveProject(){
    this.project.createProject(
      this.projectName, this.projectCustomer, this.projectManager, this.projectBAEst, this.projectBABA,
      this.projectDevEst, this.projectDevDev, this.projectQC, this.projectStatus, this.projectPlatform,
      this.projectTech, this.projectStartDate, this.projectEndDate
    ).then((data) => {
      console.log(data)
    });
  }
}

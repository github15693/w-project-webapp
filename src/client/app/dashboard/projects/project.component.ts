import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import {ProjectDAL} from "../../shared/services/dal/project";
// import {ProjectDAL} from "../../shared/services/dal/project";
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

  constructor(private project: ProjectDAL, private router: Router) {
    this.project.getProjects().then((data) => {
      console.log(data);
    });
    this.project.createProject().then((data) => {
      console.log(data)
    });
  }
}

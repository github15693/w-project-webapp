import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

import {TechnologyDAL} from "../../shared/index"

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'technology.component.html'
})

export class TechnologyComponent {
  @ViewChild('TechnologyModal') public createTechModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

  //form data binding
  modalTitle = "Technology information";
  techName = "";
  techDes = "";

  technologies: any;
  techKeys: any;

  currentObjectId: any;
  currentObject: any;

  constructor(private technologyDAL: TechnologyDAL) {
    this.getTechnologies();
    this.techKeys = this.technologyDAL.techKeys;
    this.currentObjectId = "";
  }

  saveTech(){
    if(this.currentObjectId == ""){
      this.technologyDAL.createTechnology(
        this.techName, this.techDes).then((data: any) => {
        console.log(data);
        this.createTechModal.hide();
        this.getTechnologies();
      })
    }else{
      this.technologyDAL.updateTechnology(this.setData2Save(this.getObjectById(this.currentObjectId)));
      this.createTechModal.hide();
    }
  }

  getObjectById(objectId: any){
    var technology: any;
    this.technologies.forEach((tech: any) =>{
      if (tech.id == objectId){
        technology = tech;
        return false;
      }
    });
    return technology;
  }

  showCreateModal(){
    this.currentObjectId = "";
    this.createTechModal.show();
  }

  showUpdateModal(technologyId: any){
    this.currentObjectId = technologyId;
    this.createTechModal.show();
    var tech: any;
    tech = this.getObjectById(technologyId);
    if (tech != null){
      this.techName = tech.get(this.techKeys.name);
      this.techDes = tech.get(this.techKeys.des);
    }
  }

  setData2Save(techObject: any){
    techObject.set(this.techKeys.name, this.techName);
    techObject.set(this.techKeys.des, this.techDes);
    return techObject;
  }

  getTechnologies(){
    this.technologyDAL.getTechnologies().then((data: any) =>{
      this.technologies = data;
    });
  }
}

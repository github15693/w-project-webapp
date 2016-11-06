import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

import {TechnologyDAL} from "../../shared/index"

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'technology.component.html'
})

export class TechnologyComponent {
  @ViewChild('TechnologyModal') public techModal:ModalDirective;

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

  constructor(private technology: TechnologyDAL) {
    this.getTechnologies();
    this.techKeys = this.technology.techKeys;
  }

  saveTech(){
    this.technology.createTechnology(
      this.techName, this.techDes
    ).then((data: any) => {
      console.log(data);
      this.techModal.hide();
      this.getTechnologies();
    });
  }

  getTechnologies(){
    this.technology.getTechnologies().then((data: any) =>{
      this.technologies = data;
    });
  }

}

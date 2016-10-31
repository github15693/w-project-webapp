import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

import {TechnologyDAL} from "../../shared/index"

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'technology.component.html'
})

export class TechnologyComponent {
  @ViewChild('TechnologyModalCreate') public createModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};

  //form data binding
  modalTitle = "Technology information";
  techName = "";
  techDes = "";

  constructor(private technology: TechnologyDAL) {
   this.technology.getTechnologies();
  }

  saveTech(){
    this.technology.createTechnology(
      this.techName, this.techDes
    ).then((data: any) => {
      console.log(data);
      this.createModal.hide();
    });
  }

}

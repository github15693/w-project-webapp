import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'technology.component.html'
})

export class TechnologyComponent {
  @ViewChild('childModal') public childModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};
}

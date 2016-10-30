import {Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

@Component({
	moduleId: module.id,
	selector: 'tables-cmp',
	templateUrl: 'usermanagement.component.html'
})

export class UserManagementComponent {
  @ViewChild('childModal') public childModal:ModalDirective;

  // Button
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};
}

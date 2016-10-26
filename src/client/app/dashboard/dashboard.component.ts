import { Component } from '@angular/core';
declare var Parse: any;

/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  constructor(){
    console.log(Parse);
  }
}

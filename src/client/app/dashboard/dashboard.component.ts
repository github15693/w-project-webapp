import { Component } from '@angular/core';

import {Router} from '@angular/router';
import {AccountDAL} from '../shared/index'
/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {

  constructor(private account: AccountDAL, private router: Router){
      if(this.account.getCurrentAccount() == null){
        this.router.navigate(['/']);
      }
  }

}

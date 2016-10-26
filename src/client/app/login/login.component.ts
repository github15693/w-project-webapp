import {Component, OnInit} from '@angular/core';

//services
import {AccountDAL} from '../shared/index'

/**
 *  This class represents the lazy loaded LoginComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{
  clickMessage = '';

  constructor(private Account: AccountDAL) {

  }

  ngOnInit(){
    console.log('--init--');
    // this.Parse.query('User', (obj: any)=>{
    //   // obj.equalTo()
    //   return obj;
    // }).then((data: any)=>{
    //   console.log(data);
    // });
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}

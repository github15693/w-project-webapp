import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AccountDAL, ParseSDK} from '../services/index'


@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {

  constructor(private router: Router, private  Parse: ParseSDK, private account: AccountDAL){
    // console.log(AccountDAL);
  }
	changeTheme(color: string): void {
		var link: any = $('<link>');
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}

	rtl(): void {
		var body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebarToggler(): void  {
		var sidebar: any = $('#sidebar');
		var mainContainer: any = $('.main-container');
		sidebar.toggleClass('sidebar-left-zero');
		mainContainer.toggleClass('main-container-ml-zero');
	}

  signOut(){
    this.account.signOut().then((data)=>{
      this.router.navigate(['/']);
    });
  }
}

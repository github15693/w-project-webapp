import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserDAL, ParseSDK} from '../services/index'


@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {

  public account: any;

  constructor(private router: Router, private  Parse: ParseSDK, private accountDAL: UserDAL){
    this.account = this.accountDAL.getCurrentUser();
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
    this.accountDAL.signOut().then((data: any)=>{
      this.router.navigate(['/']);
    });
  }

}

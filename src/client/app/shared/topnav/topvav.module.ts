import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from './topnav';

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

//services
import {UserDAL, ParseSDK} from '../../shared/services/index';


@NgModule({
  imports: [CommonModule, RouterModule, BrowserModule, FormsModule, DropdownModule],
  declarations: [TopNavComponent],
  exports: [TopNavComponent],
  providers: [ParseSDK, UserDAL]
})

export class TopNavModule { }

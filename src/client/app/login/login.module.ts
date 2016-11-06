import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//services
import {UserDAL, ParseSDK, RoleDAL} from '../shared/index';


@NgModule({
    imports: [CommonModule, RouterModule, BrowserModule, FormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [UserDAL, ParseSDK, RoleDAL]
})

export class LoginModule { }

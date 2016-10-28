import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//services
import {AccountDAL, ParseSDK} from '../shared/index';


@NgModule({
    imports: [CommonModule, RouterModule, BrowserModule, FormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [AccountDAL, ParseSDK]
})

export class LoginModule { }

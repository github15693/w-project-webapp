import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

//services
import {AccountDAL, ParseSDK} from '../shared/index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [AccountDAL, ParseSDK]
})

export class LoginModule { }

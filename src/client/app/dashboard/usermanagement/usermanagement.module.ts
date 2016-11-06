//noinspection TypeScriptCheckImport
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './usermanagement.component';
import {
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';

//services
import {ProjectDAL, CustomerDAL, UserDAL, PlatformDAL, TechnologyDAL} from '../../shared/index';

@NgModule({
    imports: [RouterModule,FormsModule,ModalModule, CommonModule],
    declarations: [UserManagementComponent],
    exports: [UserManagementComponent],
    providers: [ProjectDAL, CustomerDAL, UserDAL, PlatformDAL, TechnologyDAL]
})

export class UserManagementModule { }

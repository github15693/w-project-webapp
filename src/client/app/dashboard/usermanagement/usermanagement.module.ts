import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './usermanagement.component';
import {
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';

//services
import {UserDAL, ParseSDK} from '../../shared/index';

@NgModule({
    imports: [RouterModule,FormsModule,ModalModule],
    declarations: [UserManagementComponent],
    exports: [UserManagementComponent],
    providers: [UserDAL, ParseSDK]
})

export class UserManagementModule { }

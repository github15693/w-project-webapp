import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './usermanagement.component';
import {
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [RouterModule,FormsModule,ModalModule],
    declarations: [UserManagementComponent],
    exports: [UserManagementComponent]
})

export class UserManagementModule { }

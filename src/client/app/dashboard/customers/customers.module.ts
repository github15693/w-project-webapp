import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
//services
import {CustomerDAL, ParseSDK} from '../../shared/index';
import {
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [RouterModule,FormsModule,ModalModule],
    declarations: [CustomersComponent],
    exports: [CustomersComponent],
    providers: [CustomerDAL, ParseSDK]
})

export class CustomersModule { }

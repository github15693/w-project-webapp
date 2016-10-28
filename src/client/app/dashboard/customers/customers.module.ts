import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import {
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [RouterModule,FormsModule,ModalModule],
    declarations: [CustomersComponent],
    exports: [CustomersComponent]
})

export class CustomersModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import {
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        RouterModule,FormsModule,ModalModule
    ],
    declarations: [ProfileComponent],
    exports: [ProfileComponent]
})

export class ProfileModule { }

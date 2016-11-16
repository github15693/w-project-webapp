import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ProjectDetailComponent } from './project-detail.component';

//services
import {ProjectDAL, ParseSDK, FileDAL} from '../../shared/index';

@NgModule({
    imports: [
        RouterModule, FormsModule, CommonModule, ModalModule
    ],
    declarations: [ProjectDetailComponent],
    exports: [ProjectDetailComponent],
    providers: [ProjectDAL, ParseSDK, FileDAL]
})

export class ProjectDetailModule { }

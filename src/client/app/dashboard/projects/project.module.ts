import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SelectModule } from 'ng2-select';

//services
import {ProjectDAL, ParseSDK} from '../../shared/index';

@NgModule({
    imports: [RouterModule, FormsModule, ModalModule, SelectModule],
    declarations: [ProjectComponent],
    exports: [ProjectComponent],
    providers: [ProjectDAL, ParseSDK]
})

export class ProjectModule {

}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TechnologyComponent } from './technology.component';
import {
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';

//services
import {TechnologyDAL, ParseSDK} from '../../shared/index';

@NgModule({
    imports: [RouterModule,FormsModule,ModalModule],
    declarations: [TechnologyComponent],
    exports: [TechnologyComponent],
    providers: [TechnologyDAL, ParseSDK]
})

export class TechnologyModule { }

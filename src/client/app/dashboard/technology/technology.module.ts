import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TechnologyComponent } from './technology.component';
import {
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [RouterModule,FormsModule,ModalModule],
    declarations: [TechnologyComponent],
    exports: [TechnologyComponent]
})

export class TechnologyModule { }

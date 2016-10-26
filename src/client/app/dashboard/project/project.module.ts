import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';

@NgModule({
    imports: [RouterModule],
    declarations: [ProjectComponent],
    exports: [ProjectComponent]
})

export class ProjectModule { }

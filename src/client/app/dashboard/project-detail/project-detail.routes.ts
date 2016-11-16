import { Route } from '@angular/router';

import { ProjectDetailComponent } from './index';

export const ProjectDetailRoutes: Route[] = [
	{
		path: 'project-detail/:id',
		component: ProjectDetailComponent
	},
];

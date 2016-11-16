import { Route } from '@angular/router';

import { ProjectComponent, ProjectDetailComponent } from './index';

export const ProjectRoutes: Route[] = [
	{
		path: 'projects',
		component: ProjectComponent
	},
  {
		path: 'projects/:id',
		component: ProjectDetailComponent
	},
];

import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { ProjectRoutes } from './project/index';
import { CustomersRoutes } from './customers/index';
import { TechnologyRoutes } from './technology/index';
import { UserManagementRoutes } from './usermanagement/index';
import { FormRoutes } from './forms/index';
import { ProfileRoutes } from './profile/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ChartRoutes,
	    	...BSComponentRoutes,
        ...TableRoutes,
        ...ProjectRoutes,
        ...CustomersRoutes,
        ...TechnologyRoutes,
        ...UserManagementRoutes,
	    	...BlankPageRoutes,
        ...FormRoutes,
        ...ProfileRoutes,
        ...GridRoutes,
        ...BSElementRoutes
    	]
  	}
];

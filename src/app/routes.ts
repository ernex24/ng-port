import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProjectComponent} from './project/project.component';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const app_routes = RouterModule.forRoot(appRoutes,  {useHash: true});

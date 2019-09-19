import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EmptyComponent} from './components/empty/empty.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'education', component:  EmptyComponent},
  { path: 'work', component: EmptyComponent},
  { path: 'certification', component:  EmptyComponent},
  { path: 'skills', component: EmptyComponent},
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

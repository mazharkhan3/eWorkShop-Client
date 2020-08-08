import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SettingsListComponent} from './settings-list/settings-list.component';

const routes: Routes = [
  {
    path: 'list',
  component: SettingsListComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

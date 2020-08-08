import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './navmenu/menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import(`./authentication/authentication.module`).then(m => m.AuthenticationModule)
  },
  {
    path: 'home',
    component: MenuComponent,
    loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'tickets',
    component: MenuComponent,
    loadChildren: () => import(`./tickets/tickets.module`).then(m => m.TicketsModule)
  },
  {
    path: 'customers',
    component: MenuComponent,
    loadChildren: () => import(`./customers/customers.module`).then(m => m.CustomersModule)
  },
  {
    path: 'pos',
    component: MenuComponent,
    loadChildren: () => import(`./pos/pos.module`).then(m => m.PosModule)
  },
  {
    path: 'inventory',
    component: MenuComponent,
    loadChildren: () => import(`./inventory/inventory.module`).then(m => m.InventoryModule)
  },
  {
    path: 'settings',
    component: MenuComponent,
    loadChildren: () => import(`./settings/settings.module`).then(m => m.SettingsModule)
  },
  {
    path: 'reports',
    component: MenuComponent,
    loadChildren: () => import(`./reports/reports.module`).then(m => m.ReportsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

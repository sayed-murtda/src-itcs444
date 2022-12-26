import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: () => import('./page/item/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'item/edit',
    loadChildren: () => import('./page/item/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./page/Employee/employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./page/Employee/edit/edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./page/user/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./page/Employee/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./page/Employee/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'switch-shift',
    loadChildren: () => import('./page/Employee/switch-shift/switch-shift.module').then( m => m.SwitchShiftPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./page/Employee/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'suppliers/add',
    loadChildren: () => import('./page/suppliers/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'suppliers/request',
    loadChildren: () => import('./page/suppliers/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'suppliers/show-sup',
    loadChildren: () => import('./page/suppliers/show-sup/show-sup.module').then( m => m.ShowSupPageModule)
  },
  {
    path: 'suppliers/show-items/:index',
    loadChildren: () => import('./page/suppliers/show-items/show-items.module').then( m => m.ShowItemsPageModule)
  },
  {
    path: 'Employee/welcome',
    loadChildren: () => import('./page/Employee/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'casher',
    loadChildren: () => import('./page/item/casher/casher.module').then( m => m.CasherPageModule)
  },
  {
    path: 'request-item',
    loadChildren: () => import('./page/item/request-item/request-item.module').then( m => m.RequestItemPageModule)
  },
  {
    path: 'add-sup', 
    loadChildren: () => import('./page/suppliers/add-sup/add-sup.module').then( m => m.AddSupPageModule)
  },  {
    path: 'sup-items',
    loadChildren: () => import('./page/suppliers/sup-items/sup-items.module').then( m => m.SupItemsPageModule)
  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

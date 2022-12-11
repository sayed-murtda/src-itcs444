import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
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
  },  {
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




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

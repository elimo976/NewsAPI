import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'my-app', pathMatch: 'full' },
  {
    path: 'my-app',
    canActivate: [AuthGuard],
    loadChildren: () => import("./my-app/my-app.module").then((m) => m.MyAppModule)
  },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

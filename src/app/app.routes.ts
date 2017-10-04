// import { Routes, RouterModule } from '@angular/router';
//
// const routes: Routes = [
//   {
//     path: '', component: './modules/app.module#LoginBaseComponent',
//     children: [
//       { path: '', component: './modules/app.module#LoginBaseComponent' }
//     ]
//   }
// ];
// export const appRoutingProviders: any[] = [];
// export const routing = RouterModule.forRoot(routes);
// //export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
import { Routes, RouterModule } from '@angular/router';
import { LoginBaseComponent } from './login-base/login-base.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginBaseComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'forgot', component: ForgotComponent }
    ]
  },

];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);

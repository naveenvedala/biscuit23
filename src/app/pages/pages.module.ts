import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotComponent,
        LockComponent
    ]
})

export class PagesModule { }

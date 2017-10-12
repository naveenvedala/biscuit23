import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { LoginBaseComponent } from './login-base/login-base.component';
import {
  MatInputModule, MdAutocompleteModule, MdButtonModule, MdButtonToggleModule,
  MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule, MdDialogModule,
  MdExpansionModule, MdGridListModule, MdInputModule, MdListModule,
  MdMenuModule, MdNativeDateModule, MdPaginatorModule, MdProgressBarModule,
  MdProgressSpinnerModule, MdRadioModule, MdRippleModule, MdSelectModule,
  MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule,
  MdSortModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule,
  MdStepperModule,MdIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routes';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { BaseDashboardComponent } from './base-dashboard/base-dashboard.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginBaseComponent,
    LoginComponent,
    ForgotComponent,
    BaseDashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    ReactiveFormsModule,
    MdCardModule,
    MdIconModule,
    MdTooltipModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

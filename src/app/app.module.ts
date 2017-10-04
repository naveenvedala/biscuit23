import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { LoginBaseComponent } from './login-base/login-base.component';
import {
  MatInputModule, MdAutocompleteModule, MdButtonModule, MdButtonToggleModule,
  MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule, MdDialogModule,
  MdExpansionModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule,
  MdMenuModule, MdNativeDateModule, MdPaginatorModule, MdProgressBarModule,
  MdProgressSpinnerModule, MdRadioModule, MdRippleModule, MdSelectModule,
  MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule,
  MdSortModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule, MdStepperModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routes';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginBaseComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

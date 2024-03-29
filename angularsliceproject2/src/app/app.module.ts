import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './charts/chart.component';
import { ConfirmationboxComponent, ConfirmationboxDialog } from './helpercomponents/confirmationbox/confirmationbox.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CreateAcctComponent } from './create-acct/create-acct.component'
import { CreatefoodComponent } from './manager/createfood/createfood.component';
//import { RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    OrderComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    CreatefoodComponent,

    LoginComponent,
    ChartComponent,
    ConfirmationboxComponent,
    ConfirmationboxDialog,
    CreateAcctComponent     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [ { provide: MAT_DIALOG_DATA, useValue: [] } ],

  bootstrap: [AppComponent],
  entryComponents:[ConfirmationboxDialog]
})
export class AppModule { }

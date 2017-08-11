import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {Injectable} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {
  ButtonModule, DataTableModule, DialogModule, FileUploadModule, GrowlModule,
  SharedModule
} from 'primeng/primeng';
import { SetupItemComponent } from './setup-item/setup-item.component';
import { HeaderComponent } from './header/header.component';
// import {LoginService} from "./login/login.service";
import { ItemUploadComponent } from './item-upload/item-upload.component';
import { HistoryComponent } from './history/history.component';
import { VendorDataComponent } from './vendor-data/vendor-data.component';
import {VendorService} from "./vendor-data/vendor-data.service";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: VendorDataComponent },
      { path: 'history', component: HistoryComponent }
    ]
  },
  {
    path: 'manual-upload',
    component: SetupItemComponent
  },
  {
    path: 'item-upload',
    component: ItemUploadComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SetupItemComponent,
    HeaderComponent,
    ItemUploadComponent,
    HistoryComponent,
    VendorDataComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserModule,
    ButtonModule,
    DialogModule,
    GrowlModule,
    BrowserAnimationsModule,
    FileUploadModule,
    ReactiveFormsModule,
    HttpModule,
    DataTableModule,
    SharedModule
  ],
  providers: [VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

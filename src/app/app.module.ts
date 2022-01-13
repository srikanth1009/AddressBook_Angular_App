import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAddressComponent } from './component/add-address/add-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashBoardComponent,
    AddAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

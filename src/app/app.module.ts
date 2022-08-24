import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { CustomerService } from './services/customerservice';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { EditComponent } from './edit/edit.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    AccordionModule,
    SplitButtonModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
  ],
  declarations: [AppComponent, HomeComponent, EditComponent],
  providers: [CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

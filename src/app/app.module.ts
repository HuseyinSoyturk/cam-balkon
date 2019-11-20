import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DrawComponent } from './main/draw/draw.component';
import { CustomerComponent } from './main/customer/customer.component';
import { ProductsComponent } from './main/products/products.component';
import { StockComponent } from './main/stock/stock.component';
import { OptionComponent } from './main/option/option.component';
import { DrawContainerComponent } from './main/draw/draw-container/draw-container.component';
import { DrawFormComponent } from './main/draw/draw-form/draw-form.component';
import { DrawListComponent } from './main/draw/draw-list/draw-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    MainComponent,
    DashboardComponent,
    DrawComponent,
    CustomerComponent,
    ProductsComponent,
    StockComponent,
    OptionComponent,
    DrawContainerComponent,
    DrawFormComponent,
    DrawListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

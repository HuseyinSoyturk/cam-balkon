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
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';






import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { CustomerComponent } from './main/customer/customer.component';
import { ProductsComponent } from './main/products/products.component';
import { StockComponent } from './main/stock/stock.component';
import { OptionComponent } from './main/option/option.component';
import { DrawComponent } from './main/draw/draw.component';
import { DrawListComponent } from './main/draw/draw-list/draw-list.component';
import { DrawAddComponent } from './main/draw/draw-add/draw-add.component';
import { DrawEditComponent } from './main/draw/draw-edit/draw-edit.component';
import { DrawFrontViewComponent } from './main/draw/theDraw/draw-front-view/draw-front-view.component';
import { ThedrawComponent } from './main/draw/thedraw/thedraw.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    MainComponent,
    DashboardComponent,
    CustomerComponent,
    ProductsComponent,
    StockComponent,
    OptionComponent,
    DrawComponent,
    DrawListComponent,
    DrawAddComponent,
    DrawEditComponent,
    DrawFrontViewComponent,
    ThedrawComponent,
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
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

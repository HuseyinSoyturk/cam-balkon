import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ProductsComponent } from './main/products/products.component';
import { CustomerComponent } from './main/customer/customer.component';
import { StockComponent } from './main/stock/stock.component';
import { OptionComponent } from './main/option/option.component';
import { DrawComponent } from './main/draw/draw.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "product", component: ProductsComponent },
  { path: "customer", component: CustomerComponent },
  { path: "stock", component: StockComponent },
  { path: "option", component: OptionComponent },
  { path: "draw", component: DrawComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

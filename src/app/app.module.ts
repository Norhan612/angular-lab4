import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule} from'@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    HeaderComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

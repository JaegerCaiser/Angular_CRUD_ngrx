import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePage } from './pages/home/home.page';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './modules/cart/cart.reducer';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import {effects} from "./effects";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ProductListComponent,
    ProductFormComponent,
    NavbarComponent,
    ShoppingCartComponent,
  ],
  entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
            cart: cartReducer
        }),
        EffectsModule.forRoot(effects),
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [
    {
      provide: [RouteReuseStrategy, FormGroup],
      useClass: IonicRouteStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
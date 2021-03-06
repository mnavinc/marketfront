import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {CartService} from "./services/cart.service";
import {CartPopupComponent} from "./pages/cart/cart-popup/cart-popup.component";
import {ProductService} from "./services/products.service";
import { PaymentService } from './services/payments.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { AngularFireModule } from '@angular/fire';
@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        CartPopupComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        //AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [CartService,ProductService,PaymentService],
    bootstrap: [AppComponent]
})
export class AppModule { }

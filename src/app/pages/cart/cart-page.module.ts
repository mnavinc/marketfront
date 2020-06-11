/**
 * Created by ncreato on 09/06/2020.
 */

import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CartPageComponent} from "./cart-page.component";
import {cartPageRoutes} from "./cart-page.routes";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    imports: [
        SharedModule,
        HttpClientModule,
        RouterModule.forChild(cartPageRoutes)
    ],
    declarations: [
        CartPageComponent,
    ]
})
export class CartPageModule { }
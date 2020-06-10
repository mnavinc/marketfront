/**
 * Created by ncreato on 09/06/2020.
 */
import { Component } from '@angular/core';
import {CartBaseComponent} from "./cart-base.component";
import {CartService} from "../../services/cart.service";
//import { PaymentInstance } from 'angular-rave';


@Component({
    selector: 'app-cart-page',
    styleUrls: ["cart-page.component.css"],
    templateUrl: 'cart-page.component.html'
})
export class CartPageComponent extends CartBaseComponent{
    //paymentInstance: PaymentInstance;
    //token :string
    constructor(protected cartService: CartService,) {
        super(cartService);
    }


    ngOnInit() {
        console.log(this.cartList.length);
    }
    changeQuantity = (cart,quantity) => {
        cart.quantity = quantity;
        this.cartService.reloadCart(this.cartList);
    }

    confirmPayment(response: object): void {
        console.log(response);
      }
     
      cancelledPayment(): void {
          console.log('close');
      }
     
      generateReference(): string {
          let text = '';
          const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          for (let i = 0; i < 10; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
     
          return text;
      }

   
}
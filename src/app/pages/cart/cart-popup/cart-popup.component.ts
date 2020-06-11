/**
 * Created by ncreato on 09/06/2020.
 */

import {Component, HostBinding, ElementRef} from "@angular/core";
import {CartService} from "../../../services/cart.service";
import {CartBaseComponent} from "../cart-base.component";
import { PaymentService } from "../../../services/payments.service";

@Component({
    selector: 'cart-popup',
    styleUrls: ["cart-popup.component.css"],
    templateUrl: 'cart-popup.component.html',
    host: {
        '(document:click)': 'onPageClick($event)',
    }
})
export class CartPopupComponent extends CartBaseComponent{
    @HostBinding("class.visible") isVisible:boolean = false;

    constructor(
        protected cartService: CartService,
        protected paymentService: PaymentService,
        private eleref: ElementRef
    ) {
        super(cartService, paymentService);
    }
    ngOnInit() {
        this.cartService.toggleCartSubject.subscribe(res => {
            this.isVisible = res;
        });
    }
    onPageClick = (event) => {
        if (this.isVisible && !this.eleref.nativeElement.contains(event.target) && event.target.className !== 'cart-remove'){
            this.cartService.toggleCart();
        }
    };
}
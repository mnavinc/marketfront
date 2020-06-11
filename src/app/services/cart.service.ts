/**
 * Created by ncreato on 09/06/2020.
 */
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../model/product";
import {Cart} from "../model/cart";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    };
    addToCart = (cart:Cart) => {
        console.log(cart.product);
        let current = this.cartListSubject.getValue();
        console.log(this.cartListSubject.getValue());
        let dup = current.find(c=>c.product.id === cart.product);
        if(dup) dup.quantity += cart.quantity;
        else current.push(cart);
        this.cartListSubject.next(current);
    };
    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
    };
    removeCart = index => {
        let current = this.cartListSubject.getValue();
        current.splice(index,1);
        this.cartListSubject.next(current);
    };
}
/**
 * Created by ncreato on 09/06/2020.
 */
import {CartService} from "../../services/cart.service";
import {Cart} from "../../model/cart";
import { PaymentService } from "../../services/payments.service";
export class CartBaseComponent{
    public cartList:Cart[];
    public totalPrice: number;
    constructor(protected cartService: CartService, protected paymenttService: PaymentService) {
        this.loadCart();
    }
    loadCart = () => {
        this.cartService.cartListSubject
            .subscribe(res => {
                this.cartList = res;
                let total = 0;
                for(let cart of this.cartList) {
                    total += cart.product.price * cart.quantity;
                }
                this.totalPrice = total;
            })
    };
    removeFromCart = index => {
        this.cartService.removeCart(index);
    };
}
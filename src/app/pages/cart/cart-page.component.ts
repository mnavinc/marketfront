/**
 * Created by ncreato on 09/06/2020.
 */
import { Component, ChangeDetectorRef } from '@angular/core';
import {CartBaseComponent} from "./cart-base.component";
import {CartService} from "../../services/cart.service";
import { PaymentService } from '../../services/payments.service';
import { environment } from '../../../environments/environment';
//import { PaymentInstance } from 'angular-rave';


@Component({
    selector: 'app-cart-page',
    styleUrls: ["cart-page.component.css"],
    templateUrl: 'cart-page.component.html'
})
export class CartPageComponent extends CartBaseComponent{

    // totalPrice = 0;
    quantity = 0;
    payableAmount = 0;
    WindowRef: any;
    processingPayment: boolean;
    paymentResponse:any = {};

    constructor(protected cartService: CartService,protected paymentService: PaymentService,private changeRef: ChangeDetectorRef) {
        super(cartService, paymentService);
    }


    ngOnInit() {
        
    }
    changeQuantity = (cart,quantity) => {
        cart.quantity = quantity;
        this.cartService.reloadCart(this.cartList);
    }

    proceedToPay($event) {
        this.processingPayment = true;
        // this.payableAmount =  this.totalPrice;
        this.payableAmount =  3000;
        this.initiatePaymentModal($event);
    }
    
    
    initiatePaymentModal(event) {

    let receiptNumber = `Receipt#${Math.floor(Math.random() * 5123 * 43) + 10}`;
    
    let orderDetails = {
        amount: this.payableAmount,
        receipt: receiptNumber,
    }

    this.paymentService.createOrder(orderDetails)
        .subscribe(order => {
        console.log("TCL: CheckoutComponent -> initiatePaymentModal -> order", order)
            var rzp1 = new this.WindowRef.Razorpay(this.preparePaymentDetails(order));
            this.processingPayment = false;
            rzp1.open(); 
            event.preventDefault();
        }, error => {
        console.log("TCL: CheckoutComponent -> initiatePaymentModal -> error", error)

        })

    }


    preparePaymentDetails(order){

    var ref = this;
    return  {
        "key": environment.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        "amount": this.payableAmount, // Amount is in currency subunits. Default currency is INR. Hence, 29935 refers to 29935 paise or INR 299.35.
        "name": 'Pay',
        "currency": order.currency,
        "order_id": order.id,//This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
        "image": 'https://angular.io/assets/images/logos/angular/angular.png',
        "handler": function (response){
        ref.handlePayment(response);
        },
        "prefill": {
            "name": `etikoppa`
        },
        "theme": {
            "color": "#2874f0"
        }
        };
    }

    handlePayment(response) {

    this.paymentService.capturePayment({
        amount: this.payableAmount,
        payment_id: response.razorpay_payment_id
    })
        .subscribe(res => {
        this.paymentResponse = res;
        this.changeRef.detectChanges();
        },
        error => {
        this.paymentResponse = error;
        });
    }

   
}
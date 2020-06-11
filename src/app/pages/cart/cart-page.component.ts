/**
 * Created by ncreato on 09/06/2020.
 */
import { Component, ChangeDetectorRef } from '@angular/core';
import {CartBaseComponent} from "./cart-base.component";
import {CartService} from "../../services/cart.service";
import { PaymentService } from '../../services/payments.service';
import { environment } from '../../../environments/environment';
import { WindowRef } from '../../services/window.service';
//import { PaymentInstance } from 'angular-rave';


declare var Razorpay: any; 
@Component({
    selector: 'app-cart-page',
    styleUrls: ["cart-page.component.css"],
    templateUrl: 'cart-page.component.html'
})
export class CartPageComponent extends CartBaseComponent{
    // totalPrice = 0;
    quantity = 0;
    payableAmount = 0;
    // WindowRef: any;
    processingPayment: boolean;
    paymentResponse:any = {};
     
    rzp1:any;

    constructor(protected cartService: CartService,protected paymentService: PaymentService,private changeRef: ChangeDetectorRef, private winRef: WindowRef) {
        super(cartService, paymentService);
    }

    // options = {
    //     'key': environment.RAZORPAY_KEY_ID,
    //     'amount': 'totalPrice', // 2000 paise = INR 20
    //     'name': 'etikoppa',
    //     'description': 'Purchase Description',
    //     'image': '',
    //     'handler': function(response) {
    //         alert(response.razorpay_payment_id);
    //     },
    //     'prefill': {
    //         'name': 'customer1',
    //         'email': 'customer@etikoppa.com'
    //     },
    //     'notes': {
    //         'address': 'Hyderabad'
    //     },
    //     'theme': {
    //         'color': '#F37254'
    //     }
    //   };


    ngOnInit() {
        
    }
    changeQuantity = (cart,quantity) => {
        cart.quantity = quantity;
        this.cartService.reloadCart(this.cartList);
    }

    proceedToPay($event) {
        console.log($event);
        this.processingPayment = true;
        this.payableAmount =  this.totalPrice * 100;
        this.initiatePaymentModal($event);
    }
    
    
        initiatePaymentModal(event) {

        //let receiptNumber = `Receipt#${Math.floor(Math.random() * 5123 * 43) + 10}`;

        let options = {
            "key": "rzp_test_PYEQ2bi2cL6DYp", // Enter the Key ID generated from the Dashboard
            "amount": this.payableAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Etikoppa",
            "description": "Test Transaction",
            "image": "/imgs/logo-pay.jpg",
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
                //savetoDB(response);
            },
            "prefill": {
                "name": "ncreato",
                "email": "admin@marketfront.com",
                "contact": "9502423083"
            },
            "notes": {
                "address": "Hyderabad, India"
            },
            "theme": {
                "color": "#F37254"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    savetoDB(response) {
        console.log(response);
        //let payRef = environment.firebase.database().ref('payment');

        // payRef.child('123333').set({

        // })
    }

    
    // let orderDetails = {
    //     amount: this.payableAmount,
    //     receipt: receiptNumber,
    // }

    // this.paymentService.createOrder(orderDetails)
    //     .subscribe(order => {
    //     console.log("TCL: CheckoutComponent -> initiatePaymentModal -> order", order)
    //         var rzp1 = new this.WindowRef.Razorpay(this.preparePaymentDetails(order));
    //         this.processingPayment = false;
    //         rzp1.open(); 
    //         event.preventDefault();
    //     }, error => {
    //     console.log("TCL: CheckoutComponent -> initiatePaymentModal -> error", error)

    //     })

    // }


    // preparePaymentDetails(order){

    // var ref = this;
    // return  {
    //     "key": environment.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
    //     "amount": this.payableAmount, // Amount is in currency subunits. Default currency is INR. Hence, 29935 refers to 29935 paise or INR 299.35.
    //     "name": 'Pay',
    //     "currency": order.currency,
    //     "order_id": order.id,//This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
    //     "image": 'https://angular.io/assets/images/logos/angular/angular.png',
    //     "handler": function (response){
    //     ref.handlePayment(response);
    //     },
    //     "prefill": {
    //         "name": `etikoppa`
    //     },
    //     "theme": {
    //         "color": "#2874f0"
    //     }
    //     };
    // }

    // handlePayment(response) {

    // this.paymentService.capturePayment({
    //     amount: this.payableAmount,
    //     payment_id: response.razorpay_payment_id
    // })
    //     .subscribe(res => {
    //     this.paymentResponse = res;
    //     this.changeRef.detectChanges();
    //     },
    //     error => {
    //     this.paymentResponse = error;
    //     });
    // }

   
}
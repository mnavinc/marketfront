/**
 * Created by ncreato on 09/06/2020.
 */
import { Component, ChangeDetectorRef, ResolvedReflectiveFactory, NgZone } from '@angular/core';
import {CartBaseComponent} from "./cart-base.component";
import {CartService} from "../../services/cart.service";
import { PaymentService } from '../../services/payments.service';
import { environment } from '../../../environments/environment';
import { WindowRef } from '../../services/window.service';
import { $ } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';
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
    paymentSucessful:boolean = false;
    paymentResponse:any = {};
     
    rzp1:any;

    constructor(private route: ActivatedRoute,
        protected cartService: CartService,
        protected paymentService: PaymentService,
        private changeRef: ChangeDetectorRef,
        private winRef: WindowRef,
        private router: Router,
        private zone: NgZone) {
        super(cartService, paymentService);
    }

    ngOnInit() {
        
    }

    changeQuantity = (cart,quantity) => {
        cart.quantity = quantity;
        this.cartService.reloadCart(this.cartList);
    }

    proceedToPay($event) {
        console.log($event);
        
        this.initiatePaymentModal($event);
    }
    
    
        initiatePaymentModal(event) {

        //let receiptNumber = `Receipt#${Math.floor(Math.random() * 5123 * 43) + 10}`;
        this.processingPayment = true;
        this.payableAmount =  this.totalPrice * 100;

        let options = {
            "key": "rzp_test_PYEQ2bi2cL6DYp", // Enter the Key ID generated from the Dashboard
            "amount": this.payableAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Marketfront",
            "description": "Test Transaction",
            "image": "../../../assets/imgs/logo-pay.jpg",
            "prefill": {
                "name": "ncreato",
                "email": "admin@marketfront.com",
                "contact": "9502423083"
            },
            "notes": {
                "address": "Hyderabad, India"
            },
            "theme": {
                "color": "#2f3542"
            },
            "handler": this.paymentResponseHander.bind(this),
           "modal": {
                // We should prevent closing of the form when esc key is pressed.
                escape: false,
            },
        };

        // options.modal.ondismiss = (() => {
        //     // handle the case when user closes the form while transaction is in progress
        //     console.log('Transaction cancelled.');
        // });

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    // savetoDB(response) {
    //     console.log(response)
    //     var payRef = environment.firebase.database().ref('razorpay');
    
    //     payRef.child('123456789').set({
    //     payment_id : response.razorpay_payment_id
    //     })
    // }
    

    paymentResponseHander(response) {
        console.log(response);
        this.paymentSucessful = true;
        this.zone.run(() => {
            this.router.navigate(['./success'], {relativeTo: this.route});
          });
        
    }
    // redirect(response) {
    //     console.log('res:' + response)
    // }

   
}
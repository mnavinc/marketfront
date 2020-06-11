import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  get WindowRef() {
    return window;
  }

  createOrder(orderDetails) {
    console.log(orderDetails);
    return this.http.post(environment.cloudFunctions.createOrder, orderDetails);
  }

  capturePayment(paymemntDetails) {
    console.log(paymemntDetails);
    return this.http.post(environment.cloudFunctions.capturePayment,paymemntDetails);
  }
}

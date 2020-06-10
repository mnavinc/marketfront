import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub;
    public product:Product;
    quantity: number = 1;
    constructor(private route: ActivatedRoute,
                private productService:ProductService,
                private cartService:CartService,
                private router: Router
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(res => {
                this.getProduct(res.id);
            })
    }
    getProduct = (id) => {
        this.sub = this.productService.getProducts('./assets/mock-data/products2.json')
            .subscribe(res => {
                this.product = res[id-1];
            })
    };
    changeQuantity = (newQuantity:number) => {
        this.quantity = newQuantity;
    };
    addToCart = (product) => {
        if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})
    };
    buy = (product) => {
        this.addToCart(product);
        this.router.navigate(['/cart']);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

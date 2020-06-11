(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-page-module"],{

/***/ "./src/app/pages/cart/cart-page.component.css":
/*!****************************************************!*\
  !*** ./src/app/pages/cart/cart-page.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: #f6f6f6;\n    padding-bottom: 70px;\n}\n.cart-page-container {\n    max-width: 1140px;\n    text-align: center;\n    padding: 0 30px;\n    margin: auto;\n}\n.cart-page-header h1 {\n    font-size:50px;\n    font-family: \"Playfair Display\";\n    margin: 80px 0;\n}\n.cart-page-content {\n    max-width:940px;\n    margin:30px 70px;\n    background-color: white;\n    padding:60px;\n}\n.cart-item-cell {\n    width: 100%;\n}\n.cart-total,\n.cart-item-row {\n    border-bottom: 1px solid #e4e4e4;\n}\n.cart-item-header .cart-item-cell:first-of-type {\n    text-align: left;\n}\n.cart-item-header .cart-item-cell {\n    text-transform: uppercase;\n    font-size: 12px;\n    letter-spacing: .15em;\n    color: #9f9f9f;\n    text-align: right;\n}\n.cart-item-thumbnail {\n    float: left;\n    width: 120px;\n    height: 90px;\n    margin-right: 15px;\n    vertical-align: middle;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.cart-item-info {\n    float: left;\n}\n.cart-item-brand {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 12px;\n    text-transform: uppercase;\n    text-align: left;\n    letter-spacing: .05em;\n    color: #9f9f9f;\n}\n.cart-item-title {\n    color: #1d1d20;\n    max-width: 100%;\n    text-transform: uppercase;\n    letter-spacing: .1em;\n    text-align: left;\n}\n.item-price {\n    color: #9f9f9f;\n    font-size:16px;\n    font-family: \"Playfair Display\";\n}\n.item-remove {\n    font-size: 30px;\n    color:#9f9f9f;\n    cursor:pointer;\n}\n.item-remove:hover {\n    color:black;\n}\n.cart-total {\n    text-transform: uppercase;\n    color:#9f9f9f;\n    letter-spacing: 2px;\n    margin:0;\n}\n.cart-total-row {\n    line-height: 30px;\n}\n.cart-total-label {\n    text-align: left;\n}\n.cart-total-value {\n    text-align: right;\n}\n.cart-total-price {\n    color:black\n}\n.cart-buttons {\n    padding:20px 0;\n}\n.continue-shopping a {\n    text-transform: uppercase;\n    color: black;\n    float: left;\n}\n.checkout-button {\n    float: right;\n    margin-bottom: 20px;\n}\n@media screen and (min-width: 768px) {\n    .cart-item-row {\n        display: table;\n        width: 100%;\n        border-collapse: separate;\n        border-spacing: 0 30px;\n        box-sizing: border-box;\n        table-layout: fixed;\n    }\n    .cart-item-product {\n        width: 320%;\n        text-align: left;\n    }\n    .cart-item-cell {\n        display: table-cell;\n        vertical-align: top;\n        text-align: right;\n    }\n}\n@media screen and (max-width: 820px) {\n    .cart-page-content {\n        margin:0;\n    }\n    .cart-page-header h1 {\n        margin: 30px 0;\n    }\n    .cart-item-header {\n        display: none;\n    }\n    .cart-item-product {\n        width: 100%;\n        float: left;\n        margin-left: 0;\n        padding-bottom: 15px;\n    }\n    .cart-item-quantity {\n        width: 80%;\n        float: left;\n        padding-bottom: 15px;\n        text-align: left;\n    }\n    .cart-item-total,\n    .cart-item-action {\n        text-align: right;\n    }\n    .cart-total-label {\n        float: left;\n    }\n    .continue-shopping a {\n        float: none;\n    }\n    .checkout-button {\n        float: none;\n        margin:20px 0 0 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOztJQUVJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7SUFDckI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztRQUNkLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7O1FBRUksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4uY2FydC1wYWdlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY2FydC1wYWdlLWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOjUwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiO1xuICAgIG1hcmdpbjogODBweCAwO1xufVxuLmNhcnQtcGFnZS1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6OTQwcHg7XG4gICAgbWFyZ2luOjMwcHggNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOjYwcHg7XG59XG4uY2FydC1pdGVtLWNlbGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNhcnQtdG90YWwsXG4uY2FydC1pdGVtLXJvdyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG59XG4uY2FydC1pdGVtLWhlYWRlciAuY2FydC1pdGVtLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jYXJ0LWl0ZW0taGVhZGVyIC5jYXJ0LWl0ZW0tY2VsbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xNWVtO1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcnQtaXRlbS10aHVtYm5haWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY2FydC1pdGVtLWluZm8ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNhcnQtaXRlbS1icmFuZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xufVxuLmNhcnQtaXRlbS10aXRsZSB7XG4gICAgY29sb3I6ICMxZDFkMjA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pdGVtLXByaWNlIHtcbiAgICBjb2xvcjogIzlmOWY5ZjtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCI7XG59XG4uaXRlbS1yZW1vdmUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjojOWY5ZjlmO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuLml0ZW0tcmVtb3ZlOmhvdmVyIHtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuLmNhcnQtdG90YWwge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IzlmOWY5ZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIG1hcmdpbjowO1xufVxuLmNhcnQtdG90YWwtcm93IHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5jYXJ0LXRvdGFsLWxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNhcnQtdG90YWwtdmFsdWUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcnQtdG90YWwtcHJpY2Uge1xuICAgIGNvbG9yOmJsYWNrXG59XG5cbi5jYXJ0LWJ1dHRvbnMge1xuICAgIHBhZGRpbmc6MjBweCAwO1xufVxuLmNvbnRpbnVlLXNob3BwaW5nIGEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNoZWNrb3V0LWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNhcnQtaXRlbS1yb3cge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwIDMwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgfVxuICAgIC5jYXJ0LWl0ZW0tcHJvZHVjdCB7XG4gICAgICAgIHdpZHRoOiAzMjAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuY2FydC1pdGVtLWNlbGwge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgIC5jYXJ0LXBhZ2UtY29udGVudCB7XG4gICAgICAgIG1hcmdpbjowO1xuICAgIH1cbiAgICAuY2FydC1wYWdlLWhlYWRlciBoMSB7XG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgIH1cbiAgICAuY2FydC1pdGVtLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jYXJ0LWl0ZW0tcHJvZHVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAuY2FydC1pdGVtLXF1YW50aXR5IHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuY2FydC1pdGVtLXRvdGFsLFxuICAgIC5jYXJ0LWl0ZW0tYWN0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5jYXJ0LXRvdGFsLWxhYmVsIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIC5jb250aW51ZS1zaG9wcGluZyBhIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5jaGVja291dC1idXR0b24ge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luOjIwcHggMCAwIDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cart/cart-page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/cart/cart-page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart-page-container\">\n    <div class=\"cart-page-header\">\n        <h1>Shopping Cart</h1>\n    </div>\n    <div class=\"cart-page-content\" *ngIf=\"cartList.length > 0\">\n        <div class=\"cart-item-header cart-item-row\">\n            <div class=\"cart-item-cell cart-item-product\"><span>Product</span></div>\n            <div class=\"cart-item-cell cart-item-quantity\"><span>Quantity</span></div>\n            <div class=\"cart-item-cell cart-item-total\"><span>Total</span></div>\n            <div class=\"cart-item-cell cart-item-action\"><span>Action</span></div>\n        </div>\n        <div class=\"cart-item-row\" *ngFor=\"let cart of cartList;let i = index\">\n            <div class=\"cart-item-cell cart-item-product\">\n                <div class=\"cart-item-thumbnail\" [ngStyle]=\"{'background-image': 'url(./assets/imgs/plots/' + cart.product.image + ')'}\">\n                </div>\n                <div class=\"cart-item-info\">\n                    <div class=\"cart-item-brand\">{{cart.product.company}}</div>\n                    <div class=\"cart-item-title\">{{cart.product.title}}</div>\n                    <div class=\"cart-item-title\">Plot Area: {{cart.product.area}} sqyd</div>\n                    <div class=\"cart-item-title\">Facing: {{cart.product.facing}}</div>\n                    <div class=\"cart-item-title\">Type: {{cart.product.type == 'R' ? 'Residential' : 'Commercial'}}</div>\n                </div>\n            </div>\n            <div class=\"cart-item-cell cart-item-quantity\">\n                <quantity-control [quantity]=\"cart.quantity\" (onChange)=\"changeQuantity(cart,$event)\"></quantity-control>\n            </div>\n            <div class=\"cart-item-cell cart-item-total\">\n                <div class=\"item-price\">\n                    {{cart.quantity*cart.product.price | currency :'INR':true }}\n                </div>\n            </div>\n            <div class=\"cart-item-cell cart-item-action\">\n                <div class=\"item-remove\" (click)=\"removeFromCart(i)\">X</div>\n            </div>\n        </div>\n        <div class=\"row cart-total\">\n            <div class=\"col-lg-offset-6\">\n                <div class=\"cart-total-row row\">\n                    <div class=\"col-md-6 cart-total-label\">\n                        Cart overview\n                    </div>\n                    <div class=\"col-md-6 cart-total-value\"></div>\n                </div>\n                <div class=\"cart-total-row row\">\n                    <div class=\"col-md-6 cart-total-label\">\n                        subtotal\n                    </div>\n                    <div class=\"col-md-6 cart-total-value\">\n                        {{totalPrice | currency :'INR':true}}\n                    </div>\n                </div>\n                <div class=\"cart-total-row row\">\n                    <div class=\"col-md-6 cart-total-label\">\n                        total\n                    </div>\n                    <div class=\"col-md-6 cart-total-value cart-total-price\">\n                        {{totalPrice | currency :'INR':true}} INR\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"cart-buttons\">\n            <div class=\"continue-shopping\"><a routerLink=\"/\">continue shopping</a></div>\n            <button class=\"checkout-button button button-primary button-large\" (click)=\"proceedToPay($event)\">\n                <ng-container *ngIf=\"processingPayment\">\n                    <i class=\"fa fa-circle-o-notch fa-spin\"></i> Processing\n                </ng-container>\n                <ng-container *ngIf=\"!processingPayment\"> \n                  Proceed to Pay\n                </ng-container>\n            </button>\n        </div>\n    </div>\n    <div class=\"cart-page-content\" *ngIf=\"cartList.length == 0\">\n        <h4>Your cart is empty.</h4>\n        <a routerLink=\"/\">Go shopping</a>\n    </div>\n        \n    <div class=\"row payment-response\" *ngIf=\"paymentResponse.body\">\n        <div class=\"col-sm-12\">\n             <div class=\"alert alert-success\" role=\"alert\">\n                Payment successfull, With payment id {{paymentResponse.req.payment_id}} Below are the details\n              </div>\n            <!-- <prettyjson [obj]=\"paymentResponse.body\"></prettyjson> -->\n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/cart/cart-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-page.component.ts ***!
  \***************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-base.component */ "./src/app/pages/cart/cart-base.component.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/payments.service */ "./src/app/services/payments.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

/**
 * Created by ncreato on 09/06/2020.
 */





//import { PaymentInstance } from 'angular-rave';
var CartPageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartPageComponent, _super);
    function CartPageComponent(cartService, paymentService, changeRef) {
        var _this = _super.call(this, cartService, paymentService) || this;
        _this.cartService = cartService;
        _this.paymentService = paymentService;
        _this.changeRef = changeRef;
        // totalPrice = 0;
        _this.quantity = 0;
        _this.payableAmount = 0;
        _this.paymentResponse = {};
        _this.changeQuantity = function (cart, quantity) {
            cart.quantity = quantity;
            _this.cartService.reloadCart(_this.cartList);
        };
        return _this;
    }
    CartPageComponent.prototype.ngOnInit = function () {
    };
    CartPageComponent.prototype.proceedToPay = function ($event) {
        this.processingPayment = true;
        // this.payableAmount =  this.totalPrice;
        this.payableAmount = 3000;
        this.initiatePaymentModal($event);
    };
    CartPageComponent.prototype.initiatePaymentModal = function (event) {
        var _this = this;
        var receiptNumber = "Receipt#" + (Math.floor(Math.random() * 5123 * 43) + 10);
        var orderDetails = {
            amount: this.payableAmount,
            receipt: receiptNumber,
        };
        this.paymentService.createOrder(orderDetails)
            .subscribe(function (order) {
            console.log("TCL: CheckoutComponent -> initiatePaymentModal -> order", order);
            var rzp1 = new _this.WindowRef.Razorpay(_this.preparePaymentDetails(order));
            _this.processingPayment = false;
            rzp1.open();
            event.preventDefault();
        }, function (error) {
            console.log("TCL: CheckoutComponent -> initiatePaymentModal -> error", error);
        });
    };
    CartPageComponent.prototype.preparePaymentDetails = function (order) {
        var ref = this;
        return {
            "key": _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].RAZORPAY_KEY_ID,
            "amount": this.payableAmount,
            "name": 'Pay',
            "currency": order.currency,
            "order_id": order.id,
            "image": 'https://angular.io/assets/images/logos/angular/angular.png',
            "handler": function (response) {
                ref.handlePayment(response);
            },
            "prefill": {
                "name": "etikoppa"
            },
            "theme": {
                "color": "#2874f0"
            }
        };
    };
    CartPageComponent.prototype.handlePayment = function (response) {
        var _this = this;
        this.paymentService.capturePayment({
            amount: this.payableAmount,
            payment_id: response.razorpay_payment_id
        })
            .subscribe(function (res) {
            _this.paymentResponse = res;
            _this.changeRef.detectChanges();
        }, function (error) {
            _this.paymentResponse = error;
        });
    };
    CartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-page',
            template: __webpack_require__(/*! ./cart-page.component.html */ "./src/app/pages/cart/cart-page.component.html"),
            styles: [__webpack_require__(/*! ./cart-page.component.css */ "./src/app/pages/cart/cart-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _services_payments_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CartPageComponent);
    return CartPageComponent;
}(_cart_base_component__WEBPACK_IMPORTED_MODULE_2__["CartBaseComponent"]));



/***/ }),

/***/ "./src/app/pages/cart/cart-page.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart-page.module.ts ***!
  \************************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-page.component */ "./src/app/pages/cart/cart-page.component.ts");
/* harmony import */ var _cart_page_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-page.routes */ "./src/app/pages/cart/cart-page.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by ncreato on 09/06/2020.
 */







var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_cart_page_routes__WEBPACK_IMPORTED_MODULE_5__["cartPageRoutes"])
            ],
            declarations: [
                _cart_page_component__WEBPACK_IMPORTED_MODULE_4__["CartPageComponent"],
            ]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart-page.routes.ts":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart-page.routes.ts ***!
  \************************************************/
/*! exports provided: cartPageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartPageRoutes", function() { return cartPageRoutes; });
/* harmony import */ var _cart_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-page.component */ "./src/app/pages/cart/cart-page.component.ts");
/**
 * Created by ncreato on 09/06/2020.
 */

var cartPageRoutes = [
    {
        path: '',
        component: _cart_page_component__WEBPACK_IMPORTED_MODULE_0__["CartPageComponent"]
    },
];


/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-page-module.js.map
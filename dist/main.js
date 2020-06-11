(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/cart/cart-page.module": [
		"./src/app/pages/cart/cart-page.module.ts",
		"common",
		"pages-cart-cart-page-module"
	],
	"./pages/category/category.module": [
		"./src/app/pages/category/category.module.ts",
		"common",
		"pages-category-category-module"
	],
	"./pages/product/product.module": [
		"./src/app/pages/product/product.module.ts",
		"common",
		"pages-product-product-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <top-bar></top-bar>\n    <div class=\"main-panel\">\n      <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _pages_cart_cart_popup_cart_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/cart/cart-popup/cart-popup.component */ "./src/app/pages/cart/cart-popup/cart-popup.component.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/payments.service */ "./src/app/services/payments.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_9__["TopbarComponent"],
                _pages_cart_cart_popup_cart_popup_component__WEBPACK_IMPORTED_MODULE_11__["CartPopupComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"]),
            ],
            providers: [_services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"], _services_products_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"], _services_payments_service__WEBPACK_IMPORTED_MODULE_13__["PaymentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/**
 * Created by ncreato on 09/06/2020.
 */
var appRoutes = [
    {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full'
    },
    {
        path: 'category',
        loadChildren: './pages/category/category.module#CategoryModule'
    },
    {
        path: 'product',
        loadChildren: './pages/product/product.module#ProductModule'
    },
    {
        path: 'cart',
        loadChildren: './pages/cart/cart-page.module#CartPageModule'
    },
    {
        path: '**',
        loadChildren: './pages/category/category.module#CategoryModule'
    }
];


/***/ }),

/***/ "./src/app/components/topbar/top-bar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/topbar/top-bar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n    .compare-bar-content {\n        text-align: center\n    }\n    .header-logo-wrapper {\n        text-align: left\n    }\n    .header-mobile-nav-wrapper {\n        display: none\n    }\n    .mobil-shopping-cart {\n        display: none\n    }\n    .header-logo-image{\n        max-width:200px;\n    }\n}\n@media screen and (max-width: 767px) {\n    .header-nav-wrapper {\n        display: none\n    }\n    .mobile-header-nav li {\n        display: block;\n        line-height: 30px;\n    }\n    .header-logo-wrapper {\n        display: table-cell;\n        text-align: center;\n        vertical-align: top;\n    }\n    .header-mobile-nav-wrapper {\n        display: table-cell;\n        float:left;\n    }\n    .header-cart-item {\n        display: none\n    }\n    .header-logo-image{\n        max-width:140px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BiYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wYmFyL3RvcC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbXBhcmUtYmFyLWNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG4gICAgLmhlYWRlci1sb2dvLXdyYXBwZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgfVxuICAgIC5oZWFkZXItbW9iaWxlLW5hdi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cbiAgICAubW9iaWwtc2hvcHBpbmctY2FydCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG4gICAgLmhlYWRlci1sb2dvLWltYWdle1xuICAgICAgICBtYXgtd2lkdGg6MjAwcHg7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuaGVhZGVyLW5hdi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cbiAgICAubW9iaWxlLWhlYWRlci1uYXYgbGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nby13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cbiAgICAuaGVhZGVyLW1vYmlsZS1uYXYtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgfVxuICAgIC5oZWFkZXItY2FydC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cbiAgICAuaGVhZGVyLWxvZ28taW1hZ2V7XG4gICAgICAgIG1heC13aWR0aDoxNDBweDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/topbar/topbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");

/**
 * Created by ncreato on 09/06/2020.
 */


var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(cartService) {
        var _this = this;
        this.cartService = cartService;
        this.collapse = false;
        this.toggleCartPopup = function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.cartService.toggleCart();
        };
    }
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.cartListSubject
            .subscribe(function (res) {
            _this.cart_num = res.length;
        });
    };
    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'top-bar',
            template: "    \n    <div class=\"main-header navbar-fixed-top\">\n        <div class=\"header-menu\">\n            <div class=\"header-mobile-nav-wrapper\">\n                <button type=\"button\" class=\"navbar-toggle\" (click)=\"collapse = !collapse\">\n                    <span class=\"fa fa-bars fa-2x\"></span>\n                </button>\n            </div>\n            <div class=\"header-logo-wrapper\">\n                <img class=\"header-logo-image\" src=\"./assets/imgs/logo.png\" alt=\"marketfront\">\n            </div>\n            <div class=\"header-nav-wrapper\">\n                <ul class=\"header-nav\">\n                    <li class=\"header-nav-item\">\n                        <a routerLink=\"/\">HOME</a>\n                    </li>\n                    <li class=\"header-nav-item\">\n                        <a routerLink=\"/\">SHOP<span class=\"fa fa-caret-down\"></span></a>\n                    </li>\n                    <li class=\"header-nav-item\">\n                        <a routerLink=\"/\">BLOG</a>\n                    </li>\n                    <li class=\"header-nav-item\">\n                        <a routerLink=\"/\">CONTACT US</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"header-cart-wrapper\">\n                <div class=\"header-cart\" (click)=\"toggleCartPopup($event)\">\n                    <div class=\"mobil-shopping-cart\">\n                        <span><i class=\"fa fa-shopping-cart fa-2x\"></i> <span *ngIf=\"cart_num\">( {{cart_num}} )</span></span>\n                    </div>\n                    <div class=\"header-cart-item\">\n                        <a href=\"\"><i class=\"fa fa-shopping-cart fa-2x\"></i> <span *ngIf=\"cart_num\">( {{cart_num}} )</span><span class=\"fa fa-caret-down\"></span></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <ul class=\"mobile-header-nav\" *ngIf=\"collapse\" (click)=\"collapse = !collapse\">\n            <li>\n                <a routerLink=\"/\">HOME</a>\n            </li>\n            <li>\n                <a routerLink=\"/\">SHOP</a>\n            </li>\n            <li>\n                <a routerLink=\"/\">JOURNAL</a>\n            </li>\n            <li>\n                <a routerLink=\"/\">MORE</a>\n            </li>\n        </ul>\n        <cart-popup></cart-popup>\n    </div>\n",
            styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/components/topbar/top-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart-base.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-base.component.ts ***!
  \***************************************************/
/*! exports provided: CartBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartBaseComponent", function() { return CartBaseComponent; });
var CartBaseComponent = /** @class */ (function () {
    function CartBaseComponent(cartService, paymenttService) {
        var _this = this;
        this.cartService = cartService;
        this.paymenttService = paymenttService;
        this.loadCart = function () {
            _this.cartService.cartListSubject
                .subscribe(function (res) {
                _this.cartList = res;
                var total = 0;
                for (var _i = 0, _a = _this.cartList; _i < _a.length; _i++) {
                    var cart = _a[_i];
                    total += cart.product.price * cart.quantity;
                }
                _this.totalPrice = total;
            });
        };
        this.removeFromCart = function (index) {
            _this.cartService.removeCart(index);
        };
        this.loadCart();
    }
    return CartBaseComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart-popup/cart-popup.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/cart/cart-popup/cart-popup.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    width: 400px;\n    position: absolute;\n    right: 0;\n    text-transform: uppercase;\n    box-shadow: 0 2px 3px rgba(128,128,128,.25);\n    background: white;\n    transition: all .5s cubic-bezier(.25,.46,.45,.94);\n    top: -1000px;\n    opacity: 0;\n    max-height: calc(100vh - 120px);\n    overflow-y: auto;\n}\n\n:host.visible {\n    top: 100%;\n    opacity: 1;\n}\n\n.cart-empty {\n    float:right;\n    margin-right: 20px;\n}\n\n.quick-cart-footer,\n.pop-cart-item {\n    display: table;\n    border-spacing: 15px 15px;\n    border-collapse: separate;\n    box-sizing: border-box;\n    table-layout: fixed;\n    width: 100%;\n}\n\n.pop-cart-item-image-wrapper {\n    width: 80px;\n    display: table-cell;\n    vertical-align: top;\n}\n\n.pop-cart-item-image {\n    color: #1d1d20;\n    vertical-align: middle;\n    display: block;\n    width: 80px;\n    height: 80px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.pop-cart-item-details {\n    display: table-cell;\n    vertical-align: top;\n}\n\n.pop-cart-item-title {\n    margin: 0;\n    font-size: 13px;\n    line-height: 1.2;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-family: Roboto;\n}\n\n.pop-cart-item-title a {\n    color: black;\n    letter-spacing: .1em;\n    text-decoration: none;\n}\n\n.pop-cart-item-title a:hover {\n    color: #99999b;\n}\n\n.pop-cart-item-quantity {\n    display: inline-block;\n    margin-left: 5px;\n    font-size: .76923em;\n    font-weight: 400;\n}\n\n.pop-cart-item-brand {\n    display: block;\n    margin-top: 4px;\n    margin-bottom: 2px;\n    font-size: .76923em;\n    line-height: 1.3;\n    font-family: Roboto;\n    letter-spacing: .05em;\n    color: #9f9f9f;\n    text-transform: uppercase;\n    font-weight: 700;\n}\n\n.pop-cart-item-price {\n    display: block;\n    font-size: .92857em;\n    font-weight: 700;\n}\n\n.pop-cart-remove-wrapper {\n    width: 18px;\n    height: 20px;\n    text-align: center;\n    display: table-cell;\n    vertical-align: top;\n}\n\n.pop-cart-remove-wrapper span{\n    cursor: pointer;\n}\n\n.cart-total {\n    padding: 0 15px;\n}\n\n.cart-total-item {\n    padding-top: 15px;\n    border-top: 1px solid #e4e4e4;\n    max-width: 1140px;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: .85714em;\n    color: #9f9f9f;\n    font-weight: 400;\n    letter-spacing: .1em;\n}\n\n.cart-total-label {\n    float: left;\n}\n\n.cart-total-value {\n    float: right;\n}\n\n.quick-cart-footer {\n    display: table;\n    width: 100%;\n    border-bottom: 1px solid #e4e4e4;\n}\n\n.quick-cart-footer-cell {\n    display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LXBvcHVwL2NhcnQtcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix5QkFBeUI7SUFHekIsMkNBQTJDO0lBQzNDLGlCQUFpQjtJQUNqQixpREFBaUQ7SUFDakQsWUFBWTtJQUNaLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBQ0E7O0lBRUksY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LXBvcHVwL2NhcnQtcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwuMjUpO1xuICAgIC1tb3otYm94LXNoYWRvdzowIDJweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LC4yNSk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KTtcbiAgICB0b3A6IC0xMDAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0LnZpc2libGUge1xuICAgIHRvcDogMTAwJTtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmNhcnQtZW1wdHkge1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5xdWljay1jYXJ0LWZvb3Rlcixcbi5wb3AtY2FydC1pdGVtIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItc3BhY2luZzogMTVweCAxNXB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnBvcC1jYXJ0LWl0ZW0taW1hZ2Utd3JhcHBlciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnBvcC1jYXJ0LWl0ZW0taW1hZ2Uge1xuICAgIGNvbG9yOiAjMWQxZDIwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnBvcC1jYXJ0LWl0ZW0tZGV0YWlscyB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnBvcC1jYXJ0LWl0ZW0tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cbi5wb3AtY2FydC1pdGVtLXRpdGxlIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucG9wLWNhcnQtaXRlbS10aXRsZSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzk5OTk5Yjtcbn1cbi5wb3AtY2FydC1pdGVtLXF1YW50aXR5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IC43NjkyM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ucG9wLWNhcnQtaXRlbS1icmFuZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBmb250LXNpemU6IC43NjkyM2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XG4gICAgY29sb3I6ICM5ZjlmOWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLnBvcC1jYXJ0LWl0ZW0tcHJpY2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogLjkyODU3ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5wb3AtY2FydC1yZW1vdmUtd3JhcHBlciB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ucG9wLWNhcnQtcmVtb3ZlLXdyYXBwZXIgc3BhbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FydC10b3RhbCB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuLmNhcnQtdG90YWwtaXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogLjg1NzE0ZW07XG4gICAgY29sb3I6ICM5ZjlmOWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbn1cbi5jYXJ0LXRvdGFsLWxhYmVsIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5jYXJ0LXRvdGFsLXZhbHVlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucXVpY2stY2FydC1mb290ZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xufVxuLnF1aWNrLWNhcnQtZm9vdGVyLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cart/cart-popup/cart-popup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cart/cart-popup/cart-popup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-cart-item\" *ngFor=\"let cart of cartList;let i = index\">\n    <div class=\"pop-cart-item-image-wrapper\">\n        <a class=\"pop-cart-item-image\" title={{cart.product.title}}\n           [ngStyle]=\"{'background-image': 'url(./assets/imgs/plots/' + cart.product.image + ')'}\">\n        </a>\n    </div>\n    <div class=\"pop-cart-item-details\">\n        <h1 class=\"pop-cart-item-title\">\n            <a href=\"\">{{cart.product.title}} <span class=\"pop-cart-item-quantity\">× {{cart.quantity}}</span></a>\n        </h1>\n        <span class=\"pop-cart-item-brand\">\n            {{cart.product.brand}}\n        </span>\n        <span class=\"pop-cart-item-price\">\n            {{cart.product.price | currency :'USD':true }}\n        </span>\n    </div>\n    <div class=\"pop-cart-remove-wrapper\">\n        <span (click)=\"removeFromCart(i)\" class=\"cart-remove\">X</span>\n    </div>\n</div>\n<div *ngIf=\"cartList.length > 0\">\n    <div class=\"cart-total\">\n        <div class=\"cart-total-item\">\n        <span class=\"cart-total-label\">\n            Total\n        </span>\n            <span class=\"cart-total-value\">\n            {{totalPrice | currency :'USD':true }}\n        </span>\n        </div>\n    </div>\n    <footer class=\"quick-cart-footer\">\n        <div class=\"quick-cart-footer-cell\">\n            <div class=\"button button-secondary button-wide button-large\" [routerLink]=\"['../cart']\" (click)=\"cartService.toggleCart()\">View Cart</div>\n        </div>\n\n        <div class=\"quick-cart-footer-cell\">\n            <div class=\"button button-primary button-wide button-large\">Checkout</div>\n        </div>\n    </footer>\n</div>\n<div *ngIf=\"cartList.length == 0\">\n    <strong class=\"cart-empty\">Your cart is empty</strong>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/cart/cart-popup/cart-popup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/cart/cart-popup/cart-popup.component.ts ***!
  \***************************************************************/
/*! exports provided: CartPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPopupComponent", function() { return CartPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _cart_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart-base.component */ "./src/app/pages/cart/cart-base.component.ts");
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/payments.service */ "./src/app/services/payments.service.ts");
/**
 * Created by ncreato on 09/06/2020.
 */





var CartPopupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartPopupComponent, _super);
    function CartPopupComponent(cartService, paymentService, eleref) {
        var _this = _super.call(this, cartService, paymentService) || this;
        _this.cartService = cartService;
        _this.paymentService = paymentService;
        _this.eleref = eleref;
        _this.isVisible = false;
        _this.onPageClick = function (event) {
            if (_this.isVisible && !_this.eleref.nativeElement.contains(event.target) && event.target.className !== 'cart-remove') {
                _this.cartService.toggleCart();
            }
        };
        return _this;
    }
    CartPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.toggleCartSubject.subscribe(function (res) {
            _this.isVisible = res;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.visible"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CartPopupComponent.prototype, "isVisible", void 0);
    CartPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cart-popup',
            template: __webpack_require__(/*! ./cart-popup.component.html */ "./src/app/pages/cart/cart-popup/cart-popup.component.html"),
            host: {
                '(document:click)': 'onPageClick($event)',
            },
            styles: [__webpack_require__(/*! ./cart-popup.component.css */ "./src/app/pages/cart/cart-popup/cart-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _services_payments_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CartPopupComponent);
    return CartPopupComponent;
}(_cart_base_component__WEBPACK_IMPORTED_MODULE_3__["CartBaseComponent"]));



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/**
 * Created by ncreato on 09/06/2020.
 */


var CartService = /** @class */ (function () {
    function CartService() {
        var _this = this;
        this.cartListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.toggleCartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.toggleCart = function () {
            _this.toggleCartSubject.next(!_this.toggleCartSubject.getValue());
        };
        this.addToCart = function (cart) {
            console.log(cart.product);
            var current = _this.cartListSubject.getValue();
            console.log(_this.cartListSubject.getValue());
            var dup = current.find(function (c) { return c.product.id === cart.product; });
            if (dup)
                dup.quantity += cart.quantity;
            else
                current.push(cart);
            _this.cartListSubject.next(current);
        };
        this.reloadCart = function (cartList) {
            _this.cartListSubject.next(cartList);
        };
        this.removeCart = function (index) {
            var current = _this.cartListSubject.getValue();
            current.splice(index, 1);
            _this.cartListSubject.next(current);
        };
    }
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/payments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/payments.service.ts ***!
  \**********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
    }
    Object.defineProperty(PaymentService.prototype, "WindowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    PaymentService.prototype.createOrder = function (orderDetails) {
        console.log(orderDetails);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cloudFunctions.createOrder, orderDetails);
    };
    PaymentService.prototype.capturePayment = function (paymemntDetails) {
        console.log(paymemntDetails);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cloudFunctions.capturePayment, paymemntDetails);
    };
    PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * Created by ncreato on 09/06/2020.
 */





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function (dataURL) {
        return this.http.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error'); }));
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAWNu0Uk-DYm5A2_-P7f0SEnYd0USLsVFY",
        authDomain: "etikoppa-aacfe.firebaseapp.com",
        databaseURL: "https://etikoppa-aacfe.firebaseio.com",
        projectId: "etikoppa-aacfe",
        storageBucket: "etikoppa-aacfe.appspot.com",
        messagingSenderId: "510040058032",
        appId: "1:510040058032:web:904c0b252eda43b4daf375",
        measurementId: "G-J1H3EGK8HF"
    },
    cloudFunctions: {
        createOrder: 'https://us-central1-etikoppa-aacfe.cloudfunctions.net/createOrder',
        capturePayment: 'https://us-central1-etikoppa-aacfe.cloudfunctions.net/capturePayments'
    },
    RAZORPAY_KEY_ID: 'rzp_test_PYEQ2bi2cL6DYp'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mnavinc\Documents\code\etikoppa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./src/app/pages/category/category.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/category/category.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n    height: 400px;\n    background: url('buildings.png') no-repeat;\n    background-size:cover;\n    background-position: center center;\n    background-color: #e2e3e5;\n}\n.header-block {\n    height: 100%;\n    background-color: #3A3A35;\n    color:white;\n    width: 50%;\n    margin:auto;\n    border-color:white;\n    border-style:solid;\n    border-width: 0 15px;\n    display:table;\n}\n.header-text {\n    text-align: center;\n    vertical-align: middle;\n    display: table-cell;\n}\n.header-text-title {\n    display: inline-block;\n    font-size: 30px;\n    font-weight: 500;\n    padding-bottom:10px;\n    border-bottom: 1px solid white;\n}\n.header-text p {\n    padding:10px 40px\n}\n.layout-container {\n    max-width: 1140px;\n    padding-right: 30px;\n    padding-left: 30px;\n    margin-right: auto;\n    margin-left: auto;\n}\n.product-grid {\n    padding-top: 5%;\n    padding-bottom: 5%;\n}\n.product-image {\n    width: 100%;\n    height: 0;\n    padding-bottom: 66.66667%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.image-container {\n    position: relative;\n}\n.image-container:hover .product-image{\n    opacity: 0.3;\n    background-size:120%;\n}\n.image-container:hover .overlay{\n    opacity: 1;\n}\n.overlay {\n    transition: .5s ease;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%)\n}\n.overlay .button {\n    width: 160px;\n    line-height: 38px;\n}\n.overlay .button:first-child {\n    margin-bottom: 2em;\n}\n.product-details {\n    padding-top: 15px;\n    text-align: center;\n    margin-bottom: 40px;\n}\n.product-brand {\n    display: block;\n    margin: .5em 0;\n    color: #7d7d7d;\n}\n.product-title {\n    text-transform: uppercase;\n    letter-spacing: .05em;\n    margin-top: 0;\n    margin-bottom: .5em;\n    font-size: 1em;\n    line-height: 1.2;\n    font-weight: 400;\n    font-family: Roboto;\n}\n.product-price {\n    font-size: 1.14286em;\n    color: #9f9f9f;\n    font-family: Playfair Display;\n}\n.product-price span{\n    color:000;\n    font-weight:600;\n    font-family: roboto;\n}\n@media screen and (max-width: 767px) {\n    .header-block {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwwQ0FBK0Q7SUFDL0QscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2Uge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYnVpbGRpbmdzLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTNlNTtcbn1cbi5oZWFkZXItYmxvY2sge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQTM1O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgYm9yZGVyLWNvbG9yOndoaXRlO1xuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAgMTVweDtcbiAgICBkaXNwbGF5OnRhYmxlO1xufVxuLmhlYWRlci10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLmhlYWRlci10ZXh0LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG4uaGVhZGVyLXRleHQgcCB7XG4gICAgcGFkZGluZzoxMHB4IDQwcHhcbn1cbi5sYXlvdXQtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ucHJvZHVjdC1ncmlkIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuLnByb2R1Y3QtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjYuNjY2NjclO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAucHJvZHVjdC1pbWFnZXtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgYmFja2dyb3VuZC1zaXplOjEyMCU7XG59XG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5vdmVybGF5e1xuICAgIG9wYWNpdHk6IDE7XG59XG4ub3ZlcmxheSB7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbn1cbi5vdmVybGF5IC5idXR0b24ge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbn1cbi5vdmVybGF5IC5idXR0b246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5wcm9kdWN0LWRldGFpbHMge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnByb2R1Y3QtYnJhbmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogLjVlbSAwO1xuICAgIGNvbG9yOiAjN2Q3ZDdkO1xufVxuLnByb2R1Y3QtdGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cbi5wcm9kdWN0LXByaWNlIHtcbiAgICBmb250LXNpemU6IDEuMTQyODZlbTtcbiAgICBjb2xvcjogIzlmOWY5ZjtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheTtcbn1cbi5wcm9kdWN0LXByaWNlIHNwYW57XG4gICAgY29sb3I6MDAwO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuaGVhZGVyLWJsb2NrIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/category/category.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/category/category.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-image\">\n    <div class=\"header-block\">\n        <div class=\"header-text\">\n            <div class=\"header-text-title\">YOUR NEXT HOME</div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec mollis sem. Etiam id luctus libero.\n                Vivamus vulputate urna eget velit iaculis, et interdum elit pellentesque. Duis porta nunc neque, nec volutpat erat lacinia a.\n            </p>\n        </div>\n    </div>\n</div>\n<div class=\"layout-container\">\n    <div class=\"product-grid\">\n        <div class=\"col-md-4 col-sm-6\" *ngFor=\"let product of products;let i = index\">\n            <div class=\"image-container\">\n                <div class=\"product-image\" [ngStyle]=\"{'background-image': 'url(./assets/imgs/plots/' + product.image + ')'}\"></div>\n                <div class=\"overlay\">\n                    <div class=\"button button-primary\" [routerLink]=\"['../product',i+1]\">View Details</div>\n                    <!-- <div class=\"button button-primary\" (click)=\"addToCart(product)\">Add To Cart</div> -->\n                </div>\n            </div>\n            <div class=\"product-details\">\n                <div class=\"product-brand\">{{product.company}}</div>\n                <div class=\"product-title\">{{product.title}}</div>\n                <div class=\"product-price\">Starting <span>{{product.startingPrice | currency :'INR':true}}</span></div> \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/category/category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(productService, cartService, router) {
        var _this = this;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.load = function () {
            _this.sub = _this.productService.getProducts('./assets/mock-data/products2.json')
                .subscribe(function (res) {
                _this.products = res;
            });
        };
        this.addToCart = function (product) {
            _this.cartService.addToCart({ product: product, quantity: 1 });
        };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.load();
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/pages/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/pages/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.routes */ "./src/app/pages/category/category.routes.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category.component */ "./src/app/pages/category/category.component.ts");

/**
 * Created by ncreato on 09/06/2020.
 */





var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_category_routes__WEBPACK_IMPORTED_MODULE_3__["categoryRoutes"])
            ],
            declarations: [
                _category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"]
            ]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.routes.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.routes.ts ***!
  \***************************************************/
/*! exports provided: categoryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryRoutes", function() { return categoryRoutes; });
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.component */ "./src/app/pages/category/category.component.ts");
/**
 * Created by ncreato on 09/06/2020.
 */

var categoryRoutes = [
    {
        path: '',
        component: _category_component__WEBPACK_IMPORTED_MODULE_0__["CategoryComponent"]
    },
];


/***/ })

}]);
//# sourceMappingURL=pages-category-category-module.js.map
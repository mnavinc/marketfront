(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/quantity-control/quantity-control.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/quantity-control/quantity-control.component.ts ***!
  \***************************************************************************/
/*! exports provided: QuantityControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityControlComponent", function() { return QuantityControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by ncreato on 09/06/2020.
 */

var QuantityControlComponent = /** @class */ (function () {
    function QuantityControlComponent() {
        var _this = this;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.plusOne = function () {
            if (_this.quantity < 1000) {
                _this.quantity++;
                _this.onChange.emit(_this.quantity);
            }
        };
        this.minusOne = function () {
            if (_this.quantity > 1) {
                _this.quantity--;
                _this.onChange.emit(_this.quantity);
            }
        };
    }
    QuantityControlComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QuantityControlComponent.prototype, "quantity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuantityControlComponent.prototype, "onChange", void 0);
    QuantityControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'quantity-control',
            template: "\n    <div class=\"number\">\n        <input class=\"input-style\" type=\"number\" [ngModel]=\"quantity\" (ngModelChange)=\"onChange.emit($event)\">\n    </div>\n    <div class=\"actions\">\n        <div (click)=\"plusOne()\" class=\"noselect\">+</div>\n        <div (click)=\"minusOne()\" class=\"noselect\">-</div>\n    </div>\n",
            styles: ["\n    :host {\n      height: 58px;\n      display: inline-block;\n    }\n    .number, \n    .actions {\n      height: 58px;\n      width: 50px;\n      float: left;\n    }\n    .input-style {\n      text-align: center;\n      width:50px;\n      line-height: 58px;\n      background: #eee;\n      color:#7b7b7b;\n      border: 0;\n    }\n    .actions {\n      margin-left: 2px;\n      width: 29px;\n    }\n    .actions div {\n      height: 29px;\n      width: 29px;\n      line-height: 29px;\n      background: #dadada;\n      font-weight: bold;\n      color: #7d7d7d;\n      text-align: center;\n    }\n    .actions div:first-child {\n      margin-bottom: 2px;\n    }\n    .actions div:hover {\n      cursor: pointer;\n      background: #333;\n      color: white;\n    }\n    .noselect {\n      -webkit-touch-callout: none;\n      -webkit-user-select: none;\n      -khtml-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n    }\n    input[type=number]::-webkit-inner-spin-button, \n    input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none; \n      margin: 0; \n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuantityControlComponent);
    return QuantityControlComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_quantity_control_quantity_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/quantity-control/quantity-control.component */ "./src/app/components/quantity-control/quantity-control.component.ts");
/**
 * Created by ncreato on 09/06/2020.
 */





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [
                _components_quantity_control_quantity_control_component__WEBPACK_IMPORTED_MODULE_4__["QuantityControlComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_quantity_control_quantity_control_component__WEBPACK_IMPORTED_MODULE_4__["QuantityControlComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map
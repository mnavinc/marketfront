(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-module"],{

/***/ "./src/app/pages/product/product.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/product/product.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-page {\n    width: 100%;\n}\n.product-page-container {\n    max-width: 1140px;\n    text-align: center;\n    padding: 0 30px;\n    margin: auto;\n}\n.product-breadcrumbs {\n    padding: 30px 0;\n    margin-top:3em;\n    background-color:#e2e3e5;\n}\n.product-breadcrumbs li{\n    display: inline-block;\n    letter-spacing: .1em;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: .85em;\n}\n.product-breadcrumbs li a {\n    color: #4a4a4a;\n}\n.product-breadcrumbs li:last-child{\n    opacity: 0.5;\n}\n.product-details ul {\n    list-style:none;\n    width:100%;\n    display:flex;\n    flex-wrap:wrap;\n    align-items:flex-start;\n    justify-content: space-between;\n    margin:0;\n    padding:0\n}\n.product-details ul li{\n    display:inline-block;\n    text-align:left;\n    width:100%;\n    margin-top:0.5em\n}\n.product-details ul li span{\n    width:50%;\n    display:inline-block;\n    vertical-align: bottom;\n    color:#7d7d7d\n}\n.product-details ul li span.value{\n    color:#333\n}\n.product-details ul li span.value:before{\n    content: ':';\n    position:relative;\n    margin-right:1em;\n}\n.product-details-image {\n    width: 95%;\n    padding-top: 63.3%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.product-brand {\n    color: #7d7d7d;\n}\n.product-title {\n    margin:15px 0;\n    font-size:2.5em;\n    font-weight: 400;\n    font-family: \"Playfair Display\";\n}\n.product-price {\n    color:#9f9f9f;\n    font-family: \"Playfair Display\";\n    font-size:20px;\n}\n.product-description {\n    color: #7d7d7d;\n    margin:10px 0 30px 0;\n}\n.product-details-button {\n    padding:25px 0;\n    border-top: 1px solid #e4e4e4;\n    text-align: center;\n}\n.product-cart-button {\n    vertical-align: top;\n    margin-left: 5px;\n    padding: 0.5em 1em;\n    font-size: 100%;\n}\nh3.heading{\n    padding:1em;\n    margin:1em 15px;\n    text-align:left;\n    background-color:#e2e3e5\n}\nul.plots{\n    width:100%;\n    list-style:none;\n    display:flex;\n    flex-wrap:nowrap;\n    align-items: flex-start;\n    justify-content: space-between;\n}\nul.plots li{\n    min-width:250px;\n    display:inline-block;\n    box-shadow: 0 1px 10px rgba(0,0,0,.15);\n    background-color:#fff;\n    /* border-radius:4px; */\n}\nul.plots li .img{\n    width:100%;\n    height:200px;\n    background-color: #e2e3e5;\n    background:url('noimage.jpg') no-repeat;\n    background-size:cover;\n    background-position: center;\n}\n.plots li .details{\n    width:100%;\n    padding:1em;\n    text-align:left\n}\n.plots li .details h6 span{\n    display:inline-block;\n    vertical-align: bottom;\n    color:#9f9f9f;\n    min-width:50%;\n}\n.plots li .details h6 span.val{\n    color:#000\n}\n.plots li .details h6 span.val:before{\n    content:':';\n    margin:0 5px;\n    color:#9f9f9f\n}\n@media screen and (max-width: 992px) {\n    .product-details-image {\n        width: 100%;\n        padding-top: 66.6%;\n    }\n    .product-breadcrumbs {\n        padding: 30px 0;\n        margin-top:0;\n        background-color:#e2e3e5;\n    }\n    ul.plots li{\n        min-width:100%;\n        display:inline-block;\n        box-shadow: 0 1px 10px rgba(0,0,0,.15);\n        background-color:#fff;\n        border-radius:4px;\n    }\n    ul.plots{\n        width:100%;\n        list-style:none;\n        display:block;\n        flex-wrap:wrap;\n        align-items: flex-start;\n        justify-content: flex-start;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1I7QUFDSjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixVQUFVO0lBQ1Y7QUFDSjtBQUNBO0lBQ0ksU0FBUztJQUNULG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEI7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFHQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2Y7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHVDQUE0RDtJQUM1RCxxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksY0FBYztRQUNkLG9CQUFvQjtRQUNwQixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLHVCQUF1QjtRQUN2QiwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdC1wYWdlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4ucHJvZHVjdC1icmVhZGNydW1icyB7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICAgIG1hcmdpbi10b3A6M2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2UyZTNlNTtcbn1cbi5wcm9kdWN0LWJyZWFkY3J1bWJzIGxpe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAuODVlbTtcbn1cbi5wcm9kdWN0LWJyZWFkY3J1bWJzIGxpIGEge1xuICAgIGNvbG9yOiAjNGE0YTRhO1xufVxuLnByb2R1Y3QtYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG4ucHJvZHVjdC1kZXRhaWxzIHVsIHtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC13cmFwOndyYXA7XG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowXG59XG4ucHJvZHVjdC1kZXRhaWxzIHVsIGxpe1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6MC41ZW1cbn1cbi5wcm9kdWN0LWRldGFpbHMgdWwgbGkgc3BhbntcbiAgICB3aWR0aDo1MCU7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBjb2xvcjojN2Q3ZDdkXG59XG4ucHJvZHVjdC1kZXRhaWxzIHVsIGxpIHNwYW4udmFsdWV7XG4gICAgY29sb3I6IzMzM1xufVxuLnByb2R1Y3QtZGV0YWlscyB1bCBsaSBzcGFuLnZhbHVlOmJlZm9yZXtcbiAgICBjb250ZW50OiAnOic7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OjFlbTtcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1pbWFnZSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nLXRvcDogNjMuMyU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuLnByb2R1Y3QtYnJhbmQge1xuICAgIGNvbG9yOiAjN2Q3ZDdkO1xufVxuLnByb2R1Y3QtdGl0bGUge1xuICAgIG1hcmdpbjoxNXB4IDA7XG4gICAgZm9udC1zaXplOjIuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiO1xufVxuLnByb2R1Y3QtcHJpY2Uge1xuICAgIGNvbG9yOiM5ZjlmOWY7XG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiO1xuICAgIGZvbnQtc2l6ZToyMHB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICAgIG1hcmdpbjoxMHB4IDAgMzBweCAwO1xufVxuLnByb2R1Y3QtZGV0YWlscy1idXR0b24ge1xuICAgIHBhZGRpbmc6MjVweCAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0LWNhcnQtYnV0dG9uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cbmgzLmhlYWRpbmd7XG4gICAgcGFkZGluZzoxZW07XG4gICAgbWFyZ2luOjFlbSAxNXB4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlMmUzZTVcbn1cbnVsLnBsb3Rze1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LXdyYXA6bm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbnVsLnBsb3RzIGxpe1xuICAgIG1pbi13aWR0aDoyNTBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgLyogYm9yZGVyLXJhZGl1czo0cHg7ICovXG59XG51bC5wbG90cyBsaSAuaW1ne1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUzZTU7XG4gICAgYmFja2dyb3VuZDp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9ub2ltYWdlLmpwZ1wiKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wbG90cyBsaSAuZGV0YWlsc3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmc6MWVtO1xuICAgIHRleHQtYWxpZ246bGVmdFxufVxuLnBsb3RzIGxpIC5kZXRhaWxzIGg2IHNwYW57XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBjb2xvcjojOWY5ZjlmO1xuICAgIG1pbi13aWR0aDo1MCU7XG59XG4ucGxvdHMgbGkgLmRldGFpbHMgaDYgc3Bhbi52YWx7XG4gICAgY29sb3I6IzAwMFxufVxuLnBsb3RzIGxpIC5kZXRhaWxzIGg2IHNwYW4udmFsOmJlZm9yZXtcbiAgICBjb250ZW50Oic6JztcbiAgICBtYXJnaW46MCA1cHg7XG4gICAgY29sb3I6IzlmOWY5ZlxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5wcm9kdWN0LWRldGFpbHMtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDY2LjYlO1xuICAgIH1cbiAgICAucHJvZHVjdC1icmVhZGNydW1icyB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlMmUzZTU7XG4gICAgfVxuICAgIHVsLnBsb3RzIGxpe1xuICAgICAgICBtaW4td2lkdGg6MTAwJTtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLDAsMCwuMTUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIH1cbiAgICB1bC5wbG90c3tcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product/product.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\" class=\"product-page\">\n    <div class=\"product-page-container\">\n        <ol class=\"product-breadcrumbs\">\n            <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n            <li class=\"breadcrumb-item\"> / <a routerLink=\"/\">Plots</a></li>\n            <li class=\"breadcrumb-item\"> / {{product.title}}</li>\n        </ol>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"product-details-image\" [ngStyle]=\"{'background-image': 'url(./assets/imgs/plots/' + product.image + ')'}\"></div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"product-details-row\">\n                    <div class=\"product-brand\">{{product.company}}</div>\n                    <h1 class=\"product-title\">{{product.title}}</h1>\n                    <div class=\"product-price\">Starting price: <strong>{{product.startingPrice | currency :'INR':true }}</strong></div>\n                    <div class=\"product-description\">{{product.description}}</div>\n                    <div class=\"product-details\">\n                        <ul>\n                            <li><span class=\"l1\">Rera No:</span><span class=\"value\">{{product.rera}}</span></li>\n                            <li><span class=\"l1\">Type:</span><span class=\"value\">{{product.type == 'R' ? 'Residential' : 'Commercial'}}</span></li>\n                            <li><span class=\"l1\">Plots sizes available:</span><span class=\"value\">{{product.plots}}</span></li>\n                            <li><span class=\"l1\">Launch date:</span><span class=\"value\">{{product.launchDate}}</span></li>\n                            <li><span class=\"l1\">Approved by:</span><span class=\"value\">{{product.approval}}</span></li>\n                            <li><span class=\"l1\">Total area:</span><span class=\"value\">{{product.totalArea}} acres</span></li>\n                            <li><span class=\"l1\">Status:</span><span class=\"value\">{{product.status == 'RM' ? 'Ready to move' : (product.status == 'AW' ? 'Awaited' : '')}}</span></li>\n\n                            \n                        </ul>\n                    </div>\n                </div>\n                <!-- <div class=\"product-details-button\">\n                    <quantity-control [quantity]=\"quantity\" (onChange)=\"changeQuantity($event)\"></quantity-control>\n                    <div class=\"product-cart-button button button-primary button-large\" (click)=\"addToCart(product)\">Add to cart</div>\n                </div> -->\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 class=\"heading\">Available plots</h3>\n                <ul class=\"plots row\">\n                    <li *ngFor=\"let plot of product.availablePlots;let i = index\">\n                        <div class=\"plot\">\n                            <div class=\"img\" [ngStyle]=\"{'background-image': 'url(./assets/imgs/plots/' + plot.image + ')'}\"></div> <!-- -->\n                            <div class=\"details\">\n                                <h6><span class=\"lab\">Plot Type:</span><span class=\"val\">{{plot.type == 'R' ? 'Residential' : 'Commercial'}}</span></h6>\n                                <h6><span class=\"lab\">Area:</span><span class=\"val\">{{plot.area}} sqyd</span></h6>\n                                <h6><span class=\"lab\">Price:</span><span class=\"val\">{{plot.price | currency :'INR':true}}</span></h6>\n                                <div class=\"product-details-button\">\n                                    <div class=\"product-cart-button button button-secondary button\" (click)=\"addToCart(plot)\" ng-disabled=\"plot.status == 'NA'\"><i class=\"fa fa-shopping-cart\"></i></div>\n                                    <div class=\"product-cart-button button button-primary button\" (click)=\"buy(plot)\" ng-disabled=\"plot.status == 'NA'\">BUY</div>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");





var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, productService, cartService, router) {
        var _this = this;
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.quantity = 1;
        this.getProduct = function (id) {
            _this.sub = _this.productService.getProducts('./assets/mock-data/products2.json')
                .subscribe(function (res) {
                _this.product = res[id - 1];
            });
        };
        this.changeQuantity = function (newQuantity) {
            _this.quantity = newQuantity;
        };
        this.addToCart = function (product) {
            if (_this.quantity)
                _this.cartService.addToCart({ product: product, quantity: _this.quantity });
        };
        this.buy = function (product) {
            _this.addToCart(product);
            _this.router.navigate(['/cart']);
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (res) {
            _this.getProduct(res.id);
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/pages/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.routes */ "./src/app/pages/product/product.routes.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.component */ "./src/app/pages/product/product.component.ts");

/**
 * Created by ncreato on 09/06/2020.
 */





var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_product_routes__WEBPACK_IMPORTED_MODULE_3__["productRoutes"])
            ],
            declarations: [
                _product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/pages/product/product.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.routes.ts ***!
  \*************************************************/
/*! exports provided: productRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productRoutes", function() { return productRoutes; });
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.component */ "./src/app/pages/product/product.component.ts");
/**
 * Created by ncreato on 09/06/2020.
 */

var productRoutes = [
    {
        path: ':id',
        component: _product_component__WEBPACK_IMPORTED_MODULE_0__["ProductComponent"]
    },
];


/***/ })

}]);
//# sourceMappingURL=pages-product-product-module.js.map
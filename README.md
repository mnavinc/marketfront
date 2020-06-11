# Online store for real estate

This is a online real estate app implemented using Angular 7.

## Demo

<a target="_blank" href="https://etikoppa-aacfe.web.app/"><img src="./screenshot.jpg" width="600" alt="marketfront"/></a>

<a target="_blank" href="https://etikoppa-aacfe.web.app/">Live Demo</a>

## How to start

You will need to clone the source code of online-store GitHub repository.

`https://github.com/mnavinc/marketfront.git`

After the repository is cloned, go inside of the repository directory and install dependencies:

```
cd marketfront
npm install
```
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
#### Units to be tested
1. Category Page
    * test shopping cart, add a duplicate item should increment the quantity for that item.
2. Product Page, test add to cart button
    * Add 1 first item.
    * When quantity is null.
    * Add duplicate item.
3. Cart Page
    * change quantity.
    * remove item.
## Running end-to-end tests

## Notes
#### Why Angular?
Angular is a complete solution for rapid front-end development, get started with Angular using angular cli is easy. And Angular is much easier and faster than AngularJs.
React and Vue can be good options too. More importantly, i have this ecommerce application components developed in Angular4 already.
#### Why not redux or mobx?
Actually I think redux and mobx would be better choices when it comes to shopping cart case, however as it is a very simple shopping cart without any backend code, 
redux or mobx might make things more complex and reduce the code readability. In the real world project of shopping cart, I would use them to manage data flow.
#### Why not store shopping cart data?
As storing shopping cart information could be complicated and depends on the login system and backend database.
With not signed users, we have to save this data on web storage(Cookie, Session and Local Storage), and with signed users, we need update this to database.
#### Why Protractor and Karma?
They are in the Angular package, so why not :grin:
#### Why Razorpay?
As Marketfront uses razorpay, i wanted to implement the same. Seems like a good learning. 
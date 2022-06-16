# SoftecTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

# Project Description :

Ecommerce project consists of two modules [Products Module - Orders Module] and a navbar componenent that holds navbar .
the project depends on local storage to handle the items in the cart before proceeding with the order.

## project Initialization

 1- first install all the Node Packages using npm install.
 2- then run the angular project using 'ng serve' command.
 3- after running you will find these components running.
## Navbar Component 

We have 3 main pages [ Products - Cart - Orders ]
each can access by navbar located in the navbar Component.
and on the right side there is the cart component with the amount of items it have
## Home Page

the main component that will open upon running the project, in this page, only products with quantity more than 0 will be shown.

## Products Page

A component that returns and shows all the products in the JSON file in the form of cards, and in every card there are 2 buttons (edit & add) which will be functional in further development.
also in this page you can edit the amount of the products

## product edit popUp

 a pop up that allows you to update the value, name and price of the product.

 ## cart PopUP

  a pop up where you can view your cart and know the total price and proceed with the order.
 
## Orders Page 
 
 A component that returns and shows all the orders (made by the user or already exist in JSON File), in the form of cards where every card is a seperate order contains its own data (total price, user who made the order & date). 
 ## Order Details Popup  
 
to make it more simple to see all the orders in less amount of time, the order details shown in a popup where it will show the data and get back to the orders page with no reload.

## important Notes 

some dates don't show up as angular couldn't convert them using date pipe, However their value still be readed

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

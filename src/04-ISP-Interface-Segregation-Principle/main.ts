// ISP - Interface Segregation Principle
// -> Os clientes não devem ser forçados a depender de interfaces que não utilizam
// -> Ver ./classes/interfaces/CustomerProtocol.ts

import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { Persistence } from './services/Persistence';
import { Product } from './classes/Product';
import { ShoppingCart } from './classes/ShoppingCart';
import { FiftyPerCentDiscount, NoDiscount, TenPerCentDiscount } from './classes/Discount';

const fiftyPerCentDiscount = new FiftyPerCentDiscount();
const tenPerCentDiscount = new TenPerCentDiscount();
const noDiscount = new NoDiscount();

console.log(fiftyPerCentDiscount, tenPerCentDiscount, noDiscount);

const shoppingCart = new ShoppingCart(noDiscount);

const messaging = new Messaging();

const persistence = new Persistence();

const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product('Camiseta', 44.51235));
shoppingCart.addItem(new Product('Saia', 74.93213));
shoppingCart.addItem(new Product('Calça', 109.911));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);

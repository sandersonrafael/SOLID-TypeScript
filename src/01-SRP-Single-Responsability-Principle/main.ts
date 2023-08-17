import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { Persistence } from './services/Persistence';
import { Product } from './classes/Product';
import { ShoppingCart } from './classes/ShoppingCart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product('Camiseta', 44.51235));
shoppingCart.addItem(new Product('Saia', 74.93213));
shoppingCart.addItem(new Product('Calça', 109.911));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);

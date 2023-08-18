// DIP - Dependency Inversion Principle
/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes) -> quanto mais alto nível, mais abstração tem
Classes de alto nível são classes que gerenciam as classes de baixo nível. -> baixo nível, menos abstração

Ex: nas classes deste projeto, Order é uma classe de alto nível e
ShoppingCart que está presente em Order é de baixo nível

mock é uma classe que simula um objeto real de uma base de dados

ALTERADO Order E TODOS SEUS ITENS PARA INTERFACES EM VEZ DE CLASSES
Agora a class Order não depende de outras classes, somente de abstrações de tipos
*/

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

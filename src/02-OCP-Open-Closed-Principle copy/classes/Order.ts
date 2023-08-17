import { OrderStatus } from '../interfaces/OrderStatus';
import { Messaging } from '../services/Messaging';
import { Persistence } from '../services/Persistence';
import { ShoppingCart } from './ShoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void { // checkout talvez não seja uma responsabilidade do carrinho
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com o total de R$ ${this.cart.totalWithDiscount(.5)} foi recebido.`);
    this.persistence.saveOrder();
    this.cart.clear();
  }
}

import { OrderStatus } from './interfaces/OrderStatus';
import { MessagingProtocol } from './interfaces/MessagingProtocol';
import { PersistenceProtocol } from './interfaces/PersistenceProtocol';
import { ShoppingCartProtocol } from './interfaces/ShoppingCartProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistence: PersistenceProtocol,
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
    this.messaging.sendMessage(`Seu pedido com o total de R$ ${this.cart.totalWithDiscount()} foi recebido.`);
    this.persistence.saveOrder();
    this.cart.clear();
  }
}

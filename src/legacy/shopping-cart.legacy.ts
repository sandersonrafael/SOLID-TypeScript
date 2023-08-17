type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    const total = this._items.reduce((total, item) => total + item.price, 0).toFixed(2);
    return Number(total);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com o total de R$ ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso.');
  }

  clear(): void {
    this._items.splice(0);
    console.log('Carrinho de compras foi limpo.');
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 44.51235 });
shoppingCart.addItem({ name: 'Saia', price: 74.93213 });
shoppingCart.addItem({ name: 'Calça', price: 109.911 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());

shoppingCart.checkout();

console.log(shoppingCart.orderStatus);

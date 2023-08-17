type CartItem = { name: string; price: number };

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
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
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 44.51235 });
shoppingCart.addItem({ name: 'Saia', price: 74.93213 });
shoppingCart.addItem({ name: 'Calça', price: 109.911 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());

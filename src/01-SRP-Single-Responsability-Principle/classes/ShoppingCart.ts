import { CartItem } from './interfaces/CartItem';

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

  // como trata-se de validação, talvez fosse interessante ser externo se fosse usado mais vezes
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.splice(0);
    console.log('Carrinho de compras foi limpo.');
  }
}

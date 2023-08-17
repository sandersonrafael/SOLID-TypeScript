import { Discount } from './Discount';
import { CartItem } from './interfaces/CartItem';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

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

  totalWithDiscount(): unknown {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.splice(0);
    console.log('Carrinho de compras foi limpo.');
  }
}

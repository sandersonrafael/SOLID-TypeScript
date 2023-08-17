export abstract class Discount {
  protected discount = 0;

  calculate(price: number): unknown {
    return Number((price - price * (this.discount / 100)).toFixed(2));
  }
}

export class FiftyPerCentDiscount extends Discount {
  protected readonly discount = 50;
}

export class TenPerCentDiscount extends Discount {
  protected readonly discount = 10;
}

export class NoDiscount extends Discount {}

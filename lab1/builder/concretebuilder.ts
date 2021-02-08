import Product from "./product";
import Builder from "./builder";

export default class implements Builder {
  private product: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }
  public producePartA(): void {
    this.product.parts.push("Product A");
  }
  public producePartB(): void {
    this.product.parts.push("Product B");
  }
  public producePartC(): void {
    this.product.parts.push("Product C");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

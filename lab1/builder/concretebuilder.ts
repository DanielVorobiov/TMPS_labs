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
  public produceNumeObiect(): void {
    this.product.parts.push("A fost adaugat obiectul.");
  }
  public produceNumeProfesor(): void {
    this.product.parts.push("A fost adaugat profesorul.");
  }
  public produceNumarCabinet(): void {
    this.product.parts.push("A fost adaugat numarul cabinetului.");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

export default class Product {
  public parts: String[] = [];

  public listParts(): void {
    console.log(`Componente create: ${this.parts.join(", ")}\n`);
  }
}

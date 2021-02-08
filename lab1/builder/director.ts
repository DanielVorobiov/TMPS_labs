import Builder from "./builder";

export default class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.produceNumeObiect();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.produceNumeObiect();
    this.builder.produceNumeProfesor();
    this.builder.produceNumarCabinet();
  }
}

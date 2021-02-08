import ConcreteBuilder from "./concretebuilder";
import Director from "./director";

function clientCode(director: Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log("Standart basic product: ");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standart full product: ");
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log("Custom product: ");
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);

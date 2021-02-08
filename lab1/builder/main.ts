import ConcreteBuilder from "./concretebuilder";
import Director from "./director";

function clientCode(director: Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log("Producerea componentului standart");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Producerea tuturor componentelor");
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log("Producere costumizată");
  builder.produceNumeObiect();
  builder.produceNumeProfesor();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);

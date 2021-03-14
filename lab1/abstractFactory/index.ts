import AbstractFactory from "./Interfaces/AbstractFactory";
import ConcreteTMPSFactory from "./ConcreteFactories/ConcreteTMPSFactory";
import ConcreteTSFactory from "./ConcreteFactories/ConcreteTSFactory";
import ConcretePRFactory from "./ConcreteFactories/ConcretePRFactory";
import ConcreteTMPSCurs from "./TMPS/ConcreteTMPSCurs";

function mainFunction(factory: AbstractFactory) {
  const TMPS = new ConcreteTMPSCurs();
  const curs = factory.createCurs();
  const seminar = factory.createSeminar();
  const lab = factory.createLab();

  console.log(curs.createCurs());
  console.log(seminar.createSeminar());
  console.log(lab.createLab());

  TMPS.name = "Obiect";
  console.log(TMPS);
}

console.log("Creating PR Lessons: ");
mainFunction(new ConcretePRFactory());
console.log("");
console.log("Creating TS Lessons: ");
mainFunction(new ConcreteTSFactory());

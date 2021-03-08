import AbstractFactory from "../Interfaces/AbstractFactory";
import AbstractCurs from "../Interfaces/AbstractCurs";
import AbstractSeminar from "../Interfaces/AbstractSeminar";
import AbstractLab from "../Interfaces/AbstractLab";
import ConcreteTSCurs from "../TS/ConcreteTSCurs";
import ConcreteTSSEminar from "../TS/ConcreteTSSeminar";
import ConcreteTSLab from "../TS/ConcreteTSLab";

export default class ConcreteTSFactory implements AbstractFactory {
  public createCurs(): AbstractCurs {
    return new ConcreteTSCurs();
  }
  public createSeminar(): AbstractSeminar {
    return new ConcreteTSSEminar();
  }
  public createLab(): AbstractLab {
    return new ConcreteTSLab();
  }
}

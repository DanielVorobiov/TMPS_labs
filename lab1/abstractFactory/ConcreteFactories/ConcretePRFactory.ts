import AbstractFactory from "../Interfaces/AbstractFactory";
import AbstractCurs from "../Interfaces/AbstractCurs";
import AbstractSeminar from "../Interfaces/AbstractSeminar";
import AbstractLab from "../Interfaces/AbstractLab";
import ConcretePRCurs from "../PR/ConcretePRCurs";
import ConcretePRSeminar from "../PR/ConcretePRSeminar";
import ConcretePRLab from "../PR/ConcretePRLab";

export default class ConcretePRFactory implements AbstractFactory {
  public createCurs(): AbstractCurs {
    return new ConcretePRCurs();
  }

  public createLab(): AbstractLab {
    return new ConcretePRLab();
  }
}

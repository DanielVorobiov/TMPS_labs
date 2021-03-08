import AbstractFactory from "../Interfaces/AbstractFactory";
import AbstractCurs from "../Interfaces/AbstractCurs";
import AbstractSeminar from "../Interfaces/AbstractSeminar";
import AbstractLab from "../Interfaces/AbstractLab";
import ConcreteTMPSCurs from "../TMPS/ConcreteTMPSCurs";
import ConcreteTMPSSeminar from "../TMPS/ConcreteTMPSSeminar";
import ConcreteTMPSLab from "../TMPS/ConcreteTMPSLab";

export default class ConcreteTMPSFactory implements AbstractFactory {
  public createCurs(): AbstractCurs {
    return new ConcreteTMPSCurs();
  }
  public createSeminar(): AbstractSeminar {
    return new ConcreteTMPSSeminar();
  }
  public createLab(): AbstractLab {
    return new ConcreteTMPSLab();
  }
}

import AbstractLab from "../Interfaces/AbstractLab";

export default class ConcreteTMPSLab implements AbstractLab {
  public createLab(): string {
    return "A TMPS Lab was created";
  }
}

import AbstractLab from "../Interfaces/AbstractLab";

export default class ConcreteTSLab implements AbstractLab {
  public createLab(): string {
    return "A TS Lab was created";
  }
}

import AbstractLab from "../Interfaces/AbstractLab";

export default class ConcretePRCLab implements AbstractLab {
  public createLab(): string {
    return "A PR Lab was created";
  }
}

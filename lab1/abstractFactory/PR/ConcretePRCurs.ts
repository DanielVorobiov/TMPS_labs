import AbstractCurs from "../Interfaces/AbstractCurs";

export default class ConcretePRCurs implements AbstractCurs {
  public createCurs(): string {
    return "A PR Curs was created";
  }
}

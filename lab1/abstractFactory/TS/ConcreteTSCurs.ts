import AbstractCurs from "../Interfaces/AbstractCurs";

export default class ConcreteTSCurs implements AbstractCurs {
  public createCurs(): string {
    return "A TS Curs was created";
  }
}

import AbstractCurs from "../Interfaces/AbstractCurs";

export default class ConcreteTMPSCurs implements AbstractCurs {
  public name: string;
  public createCurs(): string {
    return "A TMPS Curs was created";
  }
}

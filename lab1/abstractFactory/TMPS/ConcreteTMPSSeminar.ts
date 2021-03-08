import AbstractSeminar from "../Interfaces/AbstractSeminar";

export default class ConcreteTMPSSeminar implements AbstractSeminar {
  public createSeminar(): string {
    return "A TMPS Seminar was created";
  }
}

import AbstractSeminar from "../Interfaces/AbstractSeminar";

export default class ConcreteTSSEminar implements AbstractSeminar {
  public createSeminar(): string {
    return "A TS Seminar was created";
  }
}

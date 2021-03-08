import AbstractSeminar from "../Interfaces/AbstractSeminar";

export default class ConcretePRCSeminar implements AbstractSeminar {
  public createSeminar(): string {
    return "A PR Seminar was created";
  }
}

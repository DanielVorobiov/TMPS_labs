import Memento from "./Memento";
export default class ConcreteMemento implements Memento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toString().slice(0, 19).replace("T", " ");
  }

  public getState(): string {
    return this.state;
  }

  public getDate(): string {
    return this.date;
  }
}

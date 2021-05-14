import Memento from "./Memento";
import Originator from "./Originator";
export default class Caretaker {
  private mementos: Memento[] = [];

  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();
    console.log(`The state now is: ${memento.getState()}`);
    this.originator.restore(memento);
  }
}

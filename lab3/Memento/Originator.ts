import Memento from "./Memento";
import ConcreteMemento from "./ConcreteMemento";
export default class Originator {
  private state: string;
  private firstSentence =
    "Titanic the movie is more expensive then the Ship Titanic.";
  private secondSentence = "Bees have two stmoachs.";
  private thirdSentence = "Bananas and tomatoes are berries.";
  private randomNumber: number = 0;
  private facts = [this.firstSentence, this.secondSentence, this.thirdSentence];
  constructor(state: string) {
    this.state = state;
  }

  public writeFact(): void {
    console.log("A fun fact was written");
    while (this.facts[this.randomNumber] == this.state) {
      this.randomNumber = Math.floor(Math.random() * 2);
    }
    this.state = this.facts[this.randomNumber];
    console.log(`The written fun fact is: ${this.state}`);
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
  }
}

import Elevator from "../Elevator";

export default class FourthFloor {
  private _elevator: Elevator;

  constructor(elevator) {
    this._elevator = elevator;
  }

  public execute(): void {
    this._elevator.fourthFloor(this._elevator);
  }
}

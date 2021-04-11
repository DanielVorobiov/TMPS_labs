import Elevator from "../Elevator";

export default class SecondFloor {
  private _elevator: Elevator;

  constructor(elevator) {
    this._elevator = elevator;
  }

  public execute(): void {
    this._elevator.secondFloor(this._elevator);
  }
}

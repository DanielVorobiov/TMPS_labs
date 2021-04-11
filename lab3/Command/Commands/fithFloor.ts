import Elevator from "../Elevator";

export default class FithFloor {
  private _elevator: Elevator;

  constructor(elevator) {
    this._elevator = elevator;
  }

  public execute(): void {
    this._elevator.fithFloor(this._elevator);
  }
}

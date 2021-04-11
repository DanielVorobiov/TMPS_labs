import Elevator from "../Elevator";

export default class FirstFloor {
  private _elevator: Elevator;

  constructor(elevator) {
    this._elevator = elevator;
  }

  public execute(): void {
    this._elevator.firstFloor(this._elevator);
  }
}

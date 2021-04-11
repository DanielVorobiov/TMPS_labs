import Elevator from "../Elevator";

export default class ThirdFloor {
  private _elevator: Elevator;

  constructor(elevator) {
    this._elevator = elevator;
  }

  public execute(): void {
    this._elevator.thirdFloor(this._elevator);
  }
}

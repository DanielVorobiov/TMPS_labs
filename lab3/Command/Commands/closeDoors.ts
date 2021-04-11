import Elevator from "../Elevator";

export default class CloseDoors {
  private _elevator: Elevator;

  constructor(elevator) {
    this._elevator = elevator;
  }

  public execute(): void {
    this._elevator.closeDoors(this._elevator);
  }
}

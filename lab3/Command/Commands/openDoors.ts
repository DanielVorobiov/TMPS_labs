import Elevator from "../Elevator";

export default class OpenDoors {
  private _elevator: Elevator;

  constructor(elevator) {
    this._elevator = elevator;
  }

  public execute(): void {
    this._elevator.openDoors(this._elevator);
  }
}

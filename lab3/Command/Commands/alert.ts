import Elevator from "../Elevator";

export default class Alert {
  private _elevator: Elevator;

  constructor(elevator) {
    this._elevator = elevator;
  }

  public execute(): void {
    this._elevator.alert(this._elevator);
  }
}

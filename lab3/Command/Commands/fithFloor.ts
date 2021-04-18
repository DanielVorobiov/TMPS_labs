import Elevator from "../Elevator";

export default class FithFloor {
  private _elevator: Elevator;
  private _track: string;
  constructor(elevator, track) {
    this._elevator = elevator;
    this._track = track;
  }

  public execute(): void {
    this._elevator.fithFloor(this._elevator);
  }
}

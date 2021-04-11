import Command from "./Command";

export default class ButtonsPanel {
  private _firstFloorCommand: Command;
  private _secondFloorCommand: Command;
  private _thirdFloorCommand: Command;
  private _fourthFloorCommand: Command;
  private _fithFloorCommand: Command;
  private _openDoorsCommand: Command;
  private _closeDoorsCommand: Command;
  private _alertCommand: Command;

  constructor(
    firstFloor: Command,
    secondFloor: Command,
    thirdFloor: Command,
    fourthFloor: Command,
    fithFloor: Command,
    openDoors: Command,
    closeDoors: Command,
    alert: Command
  ) {
    this._firstFloorCommand = firstFloor;
    this._secondFloorCommand = secondFloor;
    this._thirdFloorCommand = thirdFloor;
    this._fourthFloorCommand = fourthFloor;
    this._fithFloorCommand = fithFloor;
    this._openDoorsCommand = openDoors;
    this._closeDoorsCommand = closeDoors;
    this._alertCommand = alert;
  }

  public firstFloor() {
    this._firstFloorCommand.execute();
  }
  public secondFloor() {
    this._secondFloorCommand.execute();
  }
  public thirdFloor() {
    this._thirdFloorCommand.execute();
  }
  public fourthFloor() {
    this._fourthFloorCommand.execute();
  }
  public fithFloor() {
    this._fithFloorCommand.execute();
  }
  public openDoors() {
    this._openDoorsCommand.execute();
  }
  public closeDoors() {
    this._closeDoorsCommand.execute();
  }
  public alert() {
    this._alertCommand.execute();
  }
}

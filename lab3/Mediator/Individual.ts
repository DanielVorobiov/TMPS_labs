import IMediator from "./IMediator";
import Citizen from "./Citizen";

export default class Individual extends Citizen {
  constructor(mediator: IMediator, id: string) {
    super(mediator, id);
  }

  public sendLetterTo(letter: string, toId: string) {
    this._mediator.sendLetter(letter, this, toId);
  }
  public recieveLetter(letter: string, fromId: string) {
    console.log(this.Id + " received " + letter + " from " + fromId);
  }
  public sendParcelTo(parcel: string, toId: string) {
    this._mediator.sendParcel(parcel, this, toId);
  }
  public recieveParcel(parcel: string, fromId: string) {
    console.log(this.Id + " received " + parcel + " from " + fromId);
  }
}

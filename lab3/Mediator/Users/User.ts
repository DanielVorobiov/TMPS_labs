import IMediator from "../Mediators/IMediator";

export default abstract class Citizen {
  protected _mediator: IMediator;
  public readonly Id: string;

  constructor(mediator: IMediator, id: string) {
    this._mediator = mediator;
    this.Id = id;
  }

  public abstract sendLetterTo(letter: string, toId: string);
  public abstract recieveLetter(letter: string, fromId: string);
  public abstract sendParcelTo(parcel: string, toId: string);
  public abstract recieveParcel(parcel: string, fromId: string);
}

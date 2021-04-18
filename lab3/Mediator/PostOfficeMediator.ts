import Individual from "./Individual";
import IMediator from "./IMediator";
import Citizen from "./User";

export default class PostOfficeMediaotr implements IMediator {
  private _individuals: Individual[];
  constructor() {
    this._individuals = [];
  }

  public AddIndividual(individual: Individual) {
    this._individuals.push(individual);
  }
  sendLetter(letter: string, from: Individual, toId: string) {
    let to = this._individuals.find((x) => x.Id == toId);
    if (to == null) {
      console.log(toId + " dosen't exist");
    } else {
      to.recieveLetter(letter, from.Id);
    }
  }
  sendParcel(parcel: string, from: Citizen, toId: string) {
    let to = this._individuals.find((x) => x.Id == toId);
    if (to == null) {
      console.log(toId + " dosen't exist");
    } else {
      to.recieveParcel(parcel, from.Id);
    }
  }
}

import Citizen from "./User";

export default interface IMediator {
  sendLetter(letter: string, from: Citizen, toId: string);
  sendParcel(parcel: string, from: Citizen, toId: string);
}

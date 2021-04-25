import IStudent from "./IStudent";
import TI199Notifier from "./TI199Notifier";

export default class TI199Student implements IStudent {
  private _notifier: TI199Notifier;
  private _studentName: string;

  constructor(studentName: string, notifier: TI199Notifier) {
    this._studentName = studentName;
    this._notifier = notifier;
  }
  update() {
    let notification: string = this._notifier.getLastLessonNotification();
    console.log(
      "Studentul grupei TI-199, " +
        this._studentName +
        ", a primit următoarea notificare:  " +
        notification
    );
  }
}

import IStudent from "./IStudent";
import FAF199Notifier from "./FAF199Notifier";

export default class FAF199Student implements IStudent {
  private _notifier: FAF199Notifier;
  private _studentName: string;

  constructor(studentName: string, notifier: FAF199Notifier) {
    this._studentName = studentName;
    this._notifier = notifier;
  }
  update() {
    let notification: string = this._notifier.getLastLessonNotification();
    console.log(
      "FAF-199 Student, " +
        this._studentName +
        ", recieved notification: " +
        notification
    );
  }
}

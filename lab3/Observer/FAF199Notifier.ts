import LessonNotifier from "./LessonNotifier";

export default class FAF199Notifier extends LessonNotifier {
  private _lastLessonNotification: string;

  public setLastLessonNotification(lesson: string): void {
    this._lastLessonNotification = lesson;
    this.notifyStudent();
  }

  public getLastLessonNotification(): string {
    return this._lastLessonNotification;
  }
}

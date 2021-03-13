import View from "./view";

export default class Calendarview extends View {
  public result: string = "";
  public generate(): string {
    console.log("Calendar View: ");

    this.result =
      `Type: ${this.lesson.GetType()}\n` +
      `Name: ${this.lesson.GetName()}\n` +
      `Teacher: ${this.lesson.GetTeacher()}\n` +
      `Hour: ${this.lesson.GetHour()}\n`;
    return this.result;
  }
}

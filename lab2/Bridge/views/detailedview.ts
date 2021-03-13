import View from "./view";

export default class Detailedview extends View {
  public result: string = "";
  public generate(): string {
    console.log("Detailed View: ");

    this.result =
      `Type: ${this.lesson.GetType()}\n` +
      `Longname: ${this.lesson.GetLongname()}\n` +
      `Teacher: ${this.lesson.GetTeacher()}\n` +
      `Hour: ${this.lesson.GetHour()}\n` +
      `Location: ${this.lesson.GetLocation()}\n`;

    return this.result;
  }
}

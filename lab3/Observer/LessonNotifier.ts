import IStudent from "./IStudent";
export default abstract class LessonNotifier {
  _students: IStudent[];

  constructor() {
    this._students = [];
  }
  public addStudent(student: IStudent): void {
    this._students.push(student);
  }

  public removeStudent(student: IStudent): void {
    this._students.push(student);
  }

  public notifyStudent(): void {
    this._students.forEach((student) => {
      student.update();
    });
  }
}

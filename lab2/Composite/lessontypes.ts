import AcademicComponent from "./academicComponent";

export default class LessonType extends AcademicComponent {
  constructor(name: string) {
    super(name);
  }

  branch: string = " ";
  public Display(level) {
    console.log(this.branch.repeat(level) + "-".repeat(level + 1) + this.name);
  }
}

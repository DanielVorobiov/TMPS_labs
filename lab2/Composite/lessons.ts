import AcademicComponent from "./academicComponent";

export default class Lesson extends AcademicComponent {
  constructor(name: string) {
    super(name);
  }
  public components = [];

  branch: string = " ";

  public Display(level) {
    console.log(this.branch.repeat(level) + "-".repeat(level + 1) + this.name);
    this.components.forEach((element) => {
      if (element.name == "") {
        return;
      }
      element.Display(level + 1);
    });
  }

  public AddComponent(component: AcademicComponent) {
    this.components.push(component);
  }
  public RemoveComponent(component: AcademicComponent) {
    delete this.components[this.components.indexOf(component)];
  }
}

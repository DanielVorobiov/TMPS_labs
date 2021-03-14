import AcademicComponent from "./academicComponent";

export default class Speciality extends AcademicComponent {
  constructor(name: string) {
    super(name);
  }
  private components = [];

  public Display(level = 0) {
    console.log("-" + this.name);
    this.components.forEach((element) => {
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

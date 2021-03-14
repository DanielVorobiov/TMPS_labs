export default abstract class AcademicComponent {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  public Display(level = 0) {}
}

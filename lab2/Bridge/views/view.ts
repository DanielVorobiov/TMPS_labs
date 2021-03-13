import ILesson from "../lessons/lesson";
export default abstract class View {
  public lesson: ILesson;

  public abstract generate(): string;
}

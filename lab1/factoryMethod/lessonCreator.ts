import Lesson from "./lesson";

export default abstract class LessonCreator {
  public abstract factoryMethod(): Lesson;

  public createLesson(): string {
    const lesson = this.factoryMethod();
    return `Constructed a lesson of type: ${lesson.create()}`;
  }
}

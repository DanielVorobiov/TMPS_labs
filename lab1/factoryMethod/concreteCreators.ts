import LessonCreator from "./lessonCreator";
import Lesson from "./lesson";
import { CursLesson, SeminarLesson, LabLesson } from "./concreteLessons";

export class CursCreator extends LessonCreator {
  public factoryMethod(): Lesson {
    return new CursLesson();
  }
}

export class SeminarCreator extends LessonCreator {
  public factoryMethod(): Lesson {
    return new SeminarLesson();
  }
}

export class LabCreator extends LessonCreator {
  public factoryMethod(): Lesson {
    return new LabLesson();
  }
}

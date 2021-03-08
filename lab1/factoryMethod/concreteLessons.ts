import Lesson from "./lesson";

export class CursLesson implements Lesson {
  public create(): string {
    return "'curs' lesson";
  }
}

export class SeminarLesson implements Lesson {
  public create(): string {
    return "'seminar' lesson";
  }
}

export class LabLesson implements Lesson {
  public create(): string {
    return "'lab' lesson";
  }
}

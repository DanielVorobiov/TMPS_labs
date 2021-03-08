import { CursCreator, SeminarCreator, LabCreator } from "./concreteCreators";

import LessonCreator from "./lessonCreator";

function main(lesson: LessonCreator) {
  console.log(lesson.createLesson());
}

main(new CursCreator());
main(new SeminarCreator());
main(new SeminarCreator());
main(new LabCreator());

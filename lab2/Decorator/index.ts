import Lesson from "./Lesson";
import IComponent from "./IComponent";
import CursDecorator from "./Decorators/CursDecorator";
import SeminarDecorator from "./Decorators/SeminarDecorator";
import LabDecorator from "./Decorators/LabDecorator";
import IndividualDecorator from "./Decorators/IndividualDecorator";

function createLesson(
  lesson: IComponent,
  seminar: "WithSeminar" | "WithoutSeminar",
  lab: "WithLab" | "WithoutLab"
) {
  lesson = new CursDecorator(lesson);
  if (seminar == "WithSeminar") {
    lesson = new SeminarDecorator(lesson);
  }
  if (lab == "WithLab") {
    lesson = new LabDecorator(lesson);
  }
  lesson = new IndividualDecorator(lesson);
  return lesson;
}

let TMPS = new Lesson();
let PR = new Lesson();

console.log(
  "Number of TMPS Hours: " +
    createLesson(TMPS, "WithSeminar", "WithLab").getHoursNumber()
);
console.log(
  "Number of PR Hours: " +
    createLesson(PR, "WithoutSeminar", "WithLab").getHoursNumber()
);

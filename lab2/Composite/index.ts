import Lesson from "./lessons";
import LessonType from "./lessontypes";
import Speciality from "./specialities";

let TI: Speciality = new Speciality("TI");
let RM: Speciality = new Speciality("RM");

let curs: LessonType = new LessonType("Curs");
let seminar: LessonType = new LessonType("Seminar");
let laborator: LessonType = new LessonType("Laborator");
let empty: LessonType = new LessonType("");

let TMPS: Lesson = new Lesson("TMPS");
let PM3D: Lesson = new Lesson("PM3D");
let PR: Lesson = new Lesson("PR");

function addLessonTypesToALesson(
  lesson: Lesson,
  curs: LessonType,
  seminar?: LessonType,
  laborator?: LessonType
) {
  lesson.AddComponent(curs);
  lesson.AddComponent(seminar);
  lesson.AddComponent(laborator);
}

TI.AddComponent(TMPS);
addLessonTypesToALesson(TMPS, curs, seminar, laborator);

TI.AddComponent(PR);
addLessonTypesToALesson(PR, curs, empty, laborator);

RM.AddComponent(PM3D);
addLessonTypesToALesson(PM3D, curs, seminar, laborator);

TI.Display();
RM.Display();

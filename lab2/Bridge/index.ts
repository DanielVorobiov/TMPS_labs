import Cursuri from "./lessons/cursuri";
import Seminare from "./lessons/seminare";
import Labs from "./lessons/labs";
import Calendarview from "./views/calendarview";
import View from "./views/view";
import Detailedview from "./views/detailedview";

let lesson1: Labs = new Labs(
  "TMPS",
  "Bitca Ernest",
  "8:00",
  "Tehnici și Mecanisme de Poriecte Software",
  "Cabinetul: 513"
);

let lesson2: Seminare = new Seminare(
  "TMPS",
  "Bitca Ernest",
  "9:45",
  "Tehnici și Mecanisme de Poriecte Software",
  "Cabinetul: 405"
);

let lesson3: Labs = new Labs(
  "TMPS",
  "Bitca Ernest",
  "11:30",
  "Testare Software",
  "Cabinetul: 513"
);

function show(lesson, type: "calendar" | "detailed") {
  let calendarLesson: View = new Calendarview();
  calendarLesson.lesson = lesson;
  let detailedLesson: View = new Detailedview();
  detailedLesson.lesson = lesson;
  if (type == "calendar") {
    return calendarLesson.generate();
  }
  if (type == "detailed") {
    return detailedLesson.generate();
  }
}

console.log("Monday Lessons:\n");
console.log(show(lesson1, "detailed"));
console.log(show(lesson2, "calendar"));
console.log(show(lesson3, "calendar"));

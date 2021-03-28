// import Cursuri from "./lessons/cursuri";
// import Seminare from "./lessons/seminare";
// import Labs from "./lessons/labs";
// import Calendarview from "./views/calendarview";
// import View from "./views/view";
// import Detailedview from "./views/detailedview";

// let lesson1: Labs = new Labs(
//   "TMPS",
//   "Bitca Ernest",
//   "8:00",
//   "Tehnici și Mecanisme de Poriecte Software",
//   "Cabinetul: 513"
// );

// let lesson2: Seminare = new Seminare(
//   "TMPS",
//   "Bitca Ernest",
//   "9:45",
//   "Tehnici și Mecanisme de Poriecte Software",
//   "Cabinetul: 405"
// );

// let lesson3: Labs = new Labs(
//   "TS",
//   "Andrian Prisacaru",
//   "11:30",
//   "Testare Software",
//   "Cabinetul: 513"
// );

// let calendarLesson1: View = new Calendarview();
// calendarLesson1.lesson = lesson1;
// //console.log(calendarLesson1.generate());

// let detailedLesson1: View = new Detailedview();
// detailedLesson1.lesson = lesson1;
// console.log(detailedLesson1.generate());

// let calendarLesson2: View = new Calendarview();
// calendarLesson2.lesson = lesson2;
// console.log(calendarLesson2.generate());

// let detailedLesson2: View = new Detailedview();
// detailedLesson2.lesson = lesson2;
// //console.log(detailedLesson2.generate());

// let calendarLesson3: View = new Calendarview();
// calendarLesson3.lesson = lesson3;
// console.log(calendarLesson3.generate());

// let detailedLesson3: View = new Detailedview();
// detailedLesson3.lesson = lesson3;
// //console.log(detailedLesson3.generate());

function getLocalHour(): number {
  let utchour = someCoolAPIThatGivesYouTheHour.getHour();
  return utchour + 2;
}

console.log(getLocalHour());

import FAF199Notifier from "./FAF199Notifier";
import FAF199Student from "./FAF199Student";
import TI199Notifier from "./TI199Notifier";
import TI199Student from "./TI199Student";

let _TI199Notifier = new TI199Notifier();
let _FAF199Notifier = new FAF199Notifier();

let TI199Student1 = new TI199Student("Cristi", _TI199Notifier);
let TI199Student2 = new TI199Student("Bianca", _TI199Notifier);

let FAF199Student1 = new FAF199Student("Vlad", _FAF199Notifier);
let FAF199Student2 = new FAF199Student("Ilinca", _FAF199Notifier);

_TI199Notifier.addStudent(TI199Student1);
_TI199Notifier.addStudent(TI199Student2);

_FAF199Notifier.addStudent(FAF199Student1);
_FAF199Notifier.addStudent(FAF199Student2);

_TI199Notifier.setLastLessonNotification(
  "Laboratorul TMPS începe în 15 minute."
);

console.log();

_FAF199Notifier.setLastLessonNotification(
  "Data Structures starts in 30 minutes."
);

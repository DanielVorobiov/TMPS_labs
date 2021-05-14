import Caretaker from "./Caretaker";
import Originator from "./Originator";

const originator = new Originator("Initial State");
console.log(" ");

const caretaker = new Caretaker(originator);

caretaker.backup();
originator.writeFact();
console.log(" ");
caretaker.backup();
originator.writeFact();
console.log(" ");

console.log("Undo");
caretaker.undo();

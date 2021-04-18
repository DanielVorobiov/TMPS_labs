import ButtonsPanel from "./ButtonsPanel";
import FirstFloor from "./Commands/firstFloor";
import SecondFloor from "./Commands/secondFloor";
import ThirdFloor from "./Commands/thirdFloor";
import FourthFloor from "./Commands/fourthFloor";
import FithFloor from "./Commands/fithFloor";
import OpenDoors from "./Commands/openDoors";
import CloseDoors from "./Commands/closeDoors";
import Alert from "./Commands/alert";
import Elevator from "./Elevator";

let elevator1 = new Elevator("First elevator");
let elevator2 = new Elevator("Second elevator");
let firstFloorCommand1 = new FirstFloor(elevator1);
let firstFloorCommand2 = new FirstFloor(elevator2);

let secondFloorCommand1 = new SecondFloor(elevator1);
let secondFloorCommand2 = new SecondFloor(elevator2);

let thirdFloorCommand1 = new ThirdFloor(elevator1);
let thirdFloorCommand2 = new ThirdFloor(elevator2);

let fourthFloorCommand1 = new FourthFloor(elevator1);
let fourthFloorCommand2 = new FourthFloor(elevator2);

let fithFloorCommand1 = new FithFloor(elevator1, "Music");
let fithFloorCommand2 = new FithFloor(elevator2, "Another music");

let openDoorsCommand1 = new OpenDoors(elevator1);
let openDoorsCommand2 = new OpenDoors(elevator2);

let closeDoorsCommand1 = new CloseDoors(elevator1);
let closeDoorsCommand2 = new CloseDoors(elevator2);

let alertCommand1 = new Alert(elevator1);
let alertCommand2 = new Alert(elevator2);

let buttonsPannel1 = new ButtonsPanel(
  firstFloorCommand1,
  secondFloorCommand1,
  thirdFloorCommand1,
  fourthFloorCommand1,
  fithFloorCommand1,
  openDoorsCommand1,
  closeDoorsCommand1,
  alertCommand1
);

let buttonsPannel2 = new ButtonsPanel(
  firstFloorCommand2,
  secondFloorCommand2,
  thirdFloorCommand2,
  fourthFloorCommand2,
  fithFloorCommand2,
  openDoorsCommand2,
  closeDoorsCommand2,
  alertCommand2
);

buttonsPannel1.secondFloor();
buttonsPannel2.fourthFloor();
buttonsPannel1.thirdFloor();
buttonsPannel2.thirdFloor();
buttonsPannel1.openDoors();
buttonsPannel1.closeDoors();
console.log("Elevator 2 doors aren't opening");
buttonsPannel2.alert();

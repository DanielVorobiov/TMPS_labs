export default class Elevator {
  public name: string;
  constructor(elevator) {
    this.name = elevator;
  }
  public firstFloor(elevator: Elevator) {
    console.log(elevator.name + " is going to the first floor");
  }
  public secondFloor(elevator: Elevator) {
    console.log(elevator.name + " is going to the second floor");
  }
  public thirdFloor(elevator: Elevator) {
    console.log(elevator.name + " is going to the third floor");
  }
  public fourthFloor(elevator: Elevator) {
    console.log(elevator.name + " is going to the fourth floor");
  }
  public fithFloor(elevator: Elevator) {
    console.log(elevator.name + " is going to the first floor");
  }
  public closeDoors(elevator: Elevator) {
    console.log(elevator.name + "'s doors have been closed");
  }
  public openDoors(elevator: Elevator) {
    console.log("Stoping the " + elevator.name);
    console.log("The doors have been opened");
  }
  public alert(elevator: Elevator) {
    console.log("The " + elevator.name + " is making alert sounds!");
    console.log("Calling elevator service");
  }
}

import PostOfficeMediaotr from "./Mediators/PostOfficeMediator";
import Individual from "./Users/Individual";

let postOffice = new PostOfficeMediaotr();

let individual1: Individual = new Individual(postOffice, "WandaM21");
let individual2: Individual = new Individual(postOffice, "AntonS08");
let individual3: Individual = new Individual(postOffice, "SteveR45");

postOffice.AddIndividual(individual1);
postOffice.AddIndividual(individual2);
postOffice.AddIndividual(individual3);

console.log(individual3.Id + " is trying to send a letter to AntonS08...");
individual3.sendLetterTo("Wassssup?", "AntonS08");
console.log("");
console.log(individual2.Id + " is trying to send a parcel to SteveR45...");
individual2.sendParcelTo("Shield", "SteveR45");
console.log("");

console.log(individual1.Id + " is trying to send a letter to Vision...");
individual1.sendLetterTo("Hello!", "Vision");

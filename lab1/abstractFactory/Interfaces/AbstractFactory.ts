import AbstractCurs from "../Interfaces/AbstractCurs";
import AbstractSeminar from "../Interfaces/AbstractSeminar";
import AbstractLab from "../Interfaces/AbstractLab";

export default interface AbstractFactory {
  createCurs(): AbstractCurs;
  createSeminar?: () => AbstractSeminar;
  createLab(): AbstractLab;
}

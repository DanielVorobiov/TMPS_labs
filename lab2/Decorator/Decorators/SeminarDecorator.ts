import ComponentDecorator from "./ComponentDecorator";

export default class SeminarDecorator extends ComponentDecorator {
  constructor(component) {
    super(component);
  }

  getHoursNumber(): number {
    let cost = this._component.getHoursNumber() + 15;
    return cost;
  }
}

import ComponentDecorator from "./ComponentDecorator";

export default class IndividualDecorator extends ComponentDecorator {
  constructor(component) {
    super(component);
  }

  getHoursNumber(): number {
    let cost = this._component.getHoursNumber() * 2;
    return cost;
  }
}

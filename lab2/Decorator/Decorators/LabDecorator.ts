import ComponentDecorator from "./ComponentDecorator";

export default class LabDecorator extends ComponentDecorator {
  constructor(component) {
    super(component);
  }

  getHoursNumber(): number {
    let cost = this._component.getHoursNumber() + 30;
    return cost;
  }
}

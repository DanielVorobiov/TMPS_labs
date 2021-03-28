import Icomponent from "../IComponent";

export default abstract class ComponentDecorator implements Icomponent {
  protected _component: Icomponent;

  constructor(component) {
    this._component = component;
  }

  abstract getHoursNumber(): number;
}

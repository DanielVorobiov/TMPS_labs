import IComponent from "../IComponent";

export default abstract class ComponentDecorator implements IComponent {
  protected _component: IComponent;

  constructor(component) {
    this._component = component;
  }

  abstract getHoursNumber(): number;
}

import ILesson from "./lesson";
export default class Labs implements ILesson {
  private type = "Laborator";
  private _name: string;
  private _teacher: string;
  private _hour: string;
  private _longname: string;
  private _location: string;

  constructor(
    name: string,
    teacher: string,
    hour: string,
    longname: string,
    location: string
  ) {
    this._name = name;
    this._teacher = teacher;
    this._hour = hour;
    this._longname = longname;
    this._location = location;
  }

  public GetName(): string {
    return this._name;
  }

  public GetTeacher(): string {
    return this._teacher;
  }

  public GetHour(): string {
    return this._hour;
  }

  public GetLongname(): string {
    return this._longname;
  }

  public GetLocation(): string {
    return this._location;
  }
  public GetType(): string {
    return this.type;
  }
}

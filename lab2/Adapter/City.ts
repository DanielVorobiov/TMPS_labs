export default class City {
  public name: string;
  public temp: number;
  public lat: number;
  public long: number;
  constructor(name: string, temp: number, lat: number, long: number) {
    this.name = name;
    this.temp = temp;
    this.lat = lat;
    this.long = long;
  }
}

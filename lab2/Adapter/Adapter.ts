import IWeather from "./IWeather";
import WeatherbyCoordonates from "./WeatherbyCoordonates";
export default class WeatherAdapter implements IWeather {
  private readonly _weatherbyCoordonates: WeatherbyCoordonates = new WeatherbyCoordonates();

  getTemp(city): void {
    this._weatherbyCoordonates.getMyTemp(city, city.lat, city.long);
  }
}

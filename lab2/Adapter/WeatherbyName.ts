import City from "./City";
import IWeather from "./IWeather";

export default class WeatherbyName implements IWeather {
  getTemp(city) {
    console.log("The weather in " + city.name + " is:" + city.temp);
  }
}

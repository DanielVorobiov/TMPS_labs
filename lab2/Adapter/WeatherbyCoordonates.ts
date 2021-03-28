import City from "./City";
import WeatherbyName from "./WeatherbyName";

export default class WeatherbyCoordonates {
  getMyTemp(city, lat: number, long: number) {
    console.log(
      "The wether on the " +
        lat +
        " latitude and on the " +
        long +
        " longitude is: " +
        city.temp
    );
  }
}

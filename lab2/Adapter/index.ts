import City from "./City";
import IWeather from "./IWeather";
import WeatherbyName from "./WeatherbyName";
import WeatherbyCoordonates from "./WeatherbyCoordonates";
import WeatherAdapter from "./Adapter";
let chisinau: City = new City(
  "Chisinau",
  7,
  47.00973393552221,
  28.86005739303867
);

let madrid: City = new City(
  "Madrid",
  13,
  40.413825284727956,
  -3.7152487072031644
);
let weatherbyCoordonates: IWeather = new WeatherAdapter();
let weatherbyName: IWeather = new WeatherbyName();

weatherbyCoordonates.getTemp(chisinau);
weatherbyName.getTemp(madrid);

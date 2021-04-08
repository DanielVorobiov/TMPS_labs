import NewsData from "./NewsData";
import Proxy from "./Proxy";

let table = new Proxy(new NewsData());

let newsList = [];
for (let i = 1; i <= 5; i++) {
  newsList[i] = table.getNewsById(i);
}

for (let i = 1; i <= 5; i++) {
  newsList[i] = table.getNewsById(i);
}

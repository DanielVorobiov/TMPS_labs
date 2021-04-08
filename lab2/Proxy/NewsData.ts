import INewsData from "./INewsData";
import News from "./News";
import * as newsJson from "./data.json";

export default class NewsData implements INewsData {
  _news = this.getData();

  getData() {
    let _news = [];
    for (let i = 1; i <= 50; i++) {
      if (newsJson[i][0].author == undefined) {
        let author = "Clark Kent";
        let title = newsJson[i][0].title;
        let url = newsJson[i][1].url;
        _news[i] = new News(i, author, title, url);
      } else {
        let author = newsJson[i][0].author;
        let title = newsJson[i][1].title;
        let url = newsJson[i][2].url;
        _news[i] = new News(i, author, title, url);
      }
    }
    return _news;
  }

  getNewsById(id: number): News {
    console.log("Getting news from json");
    console.log("Author: " + this._news[id].author);
    console.log("Title: " + this._news[id].title);
    console.log("Url: " + this._news[id].url);    
    console.log("");
    return this._news[id];
  }
  addNewsByObject(news: News): void {
    this._news.push(news);
  }
  removeNewsById(id: number): void {
    this._news.splice(this._news[id]);
  }
}

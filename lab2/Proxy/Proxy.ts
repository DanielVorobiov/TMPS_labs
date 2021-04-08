import INewsData from "./INewsData";
import News from "./News";
import NewsData from "./NewsData";

export default class Proxy implements INewsData {
  private readonly newsTable: NewsData;
  private readonly cache = {};

  constructor(newsTable: NewsData) {
    this.newsTable = newsTable;
  }
  getNewsById(id: number): News {
    let news: News = null;
    news = this.cache[id];
    if (news == null) {
      news = this.newsTable.getNewsById(id);
      this.cache[id] = news;
    } else {
      console.log("News extracted from cache");

      console.log("Author: " + this.cache[id].author);
      console.log("Title: " + this.cache[id].title);
      console.log("Url: " + this.cache[id].url);
      console.log("");
    }
    return news;
  }
  addNewsByObject(news: News): void {
    this.newsTable.addNewsByObject(news);
    this.cache[(Object.keys(this.cache).length + 1).toString()] = news;
  }
  removeNewsById(id: number): void {
    delete this.newsTable[id];
    delete this.cache[id];
  }
}

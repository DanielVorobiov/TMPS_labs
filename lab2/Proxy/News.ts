export default class News {
  public id: number;
  public author: string;
  public title: string;
  public url: string;
  constructor(id: number, author: string, title: string, url: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.url = url;
  }
}

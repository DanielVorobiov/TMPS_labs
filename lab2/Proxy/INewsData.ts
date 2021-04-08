import News from "./News";

export default interface INewsData {
  getNewsById(id: number): News;
  addNewsByObject(news: News): void;
  removeNewsById(id: number): void;
}

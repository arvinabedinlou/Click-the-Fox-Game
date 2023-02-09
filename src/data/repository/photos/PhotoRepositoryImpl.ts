import DataListener from "../../DataListener";
import { DogModel, CatModel, FoxModel } from "../../model/PicturesModel";
import { get } from "../../provider/AppHttp";
import PicturesRepository from "./PhotoRepository";

export default class PicturesRepositoryImpl implements PicturesRepository {
  dogsList(dataListener: DataListener<DogModel[]>): void {
    get(
      `api.thedogapi.com/v1/images/search?mime_types=jpg&order=ASC&limit=4&page=0`,
      {
        onSuccess(response) {
          dataListener.onSuccess(response.data);
        },
        onFailure(message) {
          dataListener.onError(message);
        },
      }
    );
  }
  catsList(dataListener: DataListener<CatModel[]>): void {
    get(
      `api.thecatapi.com/v1/images/search?mime_types=jpg&order=ASC&limit=4&page=0`,
      {
        onSuccess(response) {
          dataListener.onSuccess(response.data);
        },
        onFailure(message) {
          dataListener.onError(message);
        },
      }
    );
  }
  foxesItem(dataListener: DataListener<FoxModel>): void {
    get(`randomfox.ca/floof/`, {
      onSuccess(response) {
        dataListener.onSuccess(response.data);
      },
      onFailure(message) {
        dataListener.onError(message);
      },
    });
  }
}

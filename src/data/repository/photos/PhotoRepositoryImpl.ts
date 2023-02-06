import DataListener from "../../DataListener";
import {
  DogModel,
  CatModel,
  FoxModel,
  CatParamsModel,
} from "../../model/PicturesModel";
import { get } from "../../provider/AppHttp";
import PicturesRepository from "./PhotoRepository";

export default class PicturesRepositoryImpl implements PicturesRepository {
  dogsList(page: number, dataListener: DataListener<DogModel[]>): void {
    get(
      `api.thedogapi.com/v1/images/search?mime_types=jpg&order=ASC&limit=4&page=${page}`,
      page,
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
  catsList(page: number, dataListener: DataListener<CatModel[]>): void {
    get(
      `api.thecatapi.com/v1/images/search?mime_types=jpg&order=ASC&limit=4&page=${page}`,
      page,
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
  foxesItem(page: number, dataListener: DataListener<FoxModel>): void {
    get(`randomfox.ca/floof/`, page, {
      onSuccess(response) {
        dataListener.onSuccess(response.data);
      },
      onFailure(message) {
        dataListener.onError(message);
      },
    });
  }
}

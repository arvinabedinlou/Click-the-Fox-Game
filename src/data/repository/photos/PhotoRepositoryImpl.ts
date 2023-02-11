import DataListener from "../../DataListener";
import {
  DogModel,
  CatModel,
  FoxModel,
  PicturesModel,
} from "../../model/PicturesModel";
import { get } from "../../provider/AppHttp";
import PicturesRepository from "./PhotoRepository";

export default class PicturesRepositoryImpl implements PicturesRepository {
  async picturesList(dataListener: DataListener<PicturesModel>) {
    const addType = (data: any[], type: string) => {
      let finalData = data.filter((item, index) => {
        return index < 4 && (item["type"] = type);
      });
      return finalData;
    };
    let FinalData: any = [];
    try {
      const res = await Promise.all([
        get(
          `api.thedogapi.com/v1/images/search?mime_types=jpg&order=ASC&limit=4&page=0`,
          {
            onSuccess(response) {
              const typedDog = addType(response.data, "dog");
              FinalData.push(...typedDog);
              // dataListener.onSuccess(typedDog);
            },
            onFailure(message) {
              dataListener.onError(message);
            },
          }
        ),
        get(
          `api.thecatapi.com/v1/images/search?mime_types=jpg&order=ASC&limit=4&page=0`,
          {
            onSuccess(response) {
              const typedCat = addType(response.data, "cat");
              FinalData.push(...typedCat);
              // dataListener.onSuccess(response.data);
            },
            onFailure(message) {
              dataListener.onError(message);
            },
          }
        ),
        get(`randomfox.ca/floof/`, {
          onSuccess(response) {
            FinalData.push(response.data);
            // dataListener.onSuccess(response.data);
          },
          onFailure(message) {
            dataListener.onError(message);
          },
        }),
      ]);
      const data = await Promise.all(
        res.map((r) => dataListener.onSuccess(FinalData))
      );
      // console.log(data.flat());
      // console.log(data);
    } catch {
      throw Error("Promise failed");
    }
  }
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

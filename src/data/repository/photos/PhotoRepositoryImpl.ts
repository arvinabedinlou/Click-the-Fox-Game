import DataListener from "../../DataListener";
import { PicturesModel } from "../../model/PicturesModel";
import { get } from "../../provider/AppHttp";
import PicturesRepository from "./PhotoRepository";

export default class PicturesRepositoryImpl implements PicturesRepository {
  async picturesList(dataListener: DataListener<PicturesModel[]>) {
    let mixedPictures: PicturesModel[] = [];

    const addType = (data: PicturesModel[], type: string) => {
      let typedData = data.filter((item, index) => {
        return index < 4 && (item["type"] = type);
      });
      return typedData;
    };

    try {
      const res = await Promise.all([
        get(
          `api.thedogapi.com/v1/images/search?mime_types=jpg&order=ASC&limit=4&page=0`,
          {
            onSuccess(response) {
              const typedDog = addType(response.data, "dog");
              mixedPictures.push(...typedDog);
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
              mixedPictures.push(...typedCat);
            },
            onFailure(message) {
              dataListener.onError(message);
            },
          }
        ),
        get(`randomfox.ca/floof/`, {
          onSuccess(response) {
            delete Object.assign(response.data, { url: response.data.image })[
              "image"
            ];
            mixedPictures.push(response.data);
          },
          onFailure(message) {
            dataListener.onError(message);
          },
        }),
      ]);
      const shuffledPictures = mixedPictures.sort(() => 0.5 - Math.random());
      await Promise.all(
        res.map(() => dataListener.onSuccess(shuffledPictures))
      );
    } catch {
      throw Error("Promise failed");
    }
  }
}

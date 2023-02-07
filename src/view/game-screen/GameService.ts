import DataViewListener from "../../data/DataViewListener";
import { CatModel, DogModel, FoxModel } from "../../data/model/PicturesModel";
import PicturesRepositoryImpl from "../../data/repository/photos/PhotoRepositoryImpl";

class PicturesService {
  PicturesRepository: PicturesRepositoryImpl = new PicturesRepositoryImpl();

  getCatsList(dataViewListener: DataViewListener<CatModel[]>): void {
    this.PicturesRepository.catsList({
      onSuccess(data) {
        dataViewListener.onSuccess(data);
      },
      onError(message) {
        dataViewListener.showMessage(message);
      },
    });
  }

  getDogsList(dataViewListener: DataViewListener<DogModel[]>): void {
    this.PicturesRepository.dogsList({
      onSuccess(data) {
        dataViewListener.onSuccess(data);
      },
      onError(message) {
        dataViewListener.showMessage(message);
      },
    });
  }
  getFoxItem(dataViewListener: DataViewListener<FoxModel>): void {
    this.PicturesRepository.foxesItem({
      onSuccess(data) {
        dataViewListener.onSuccess(data);
      },
      onError(message) {
        dataViewListener.showMessage(message);
      },
    });
  }
}
export default new PicturesService();
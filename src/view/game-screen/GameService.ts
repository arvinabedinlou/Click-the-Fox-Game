import DataViewListener from "../../data/DataViewListener";
import { CatModel, DogModel, FoxModel } from "../../data/model/PicturesModel";
import PicturesRepositoryImpl from "../../data/repository/photos/PhotoRepositoryImpl";

class PicturesService {
  PicturesRepository: PicturesRepositoryImpl = new PicturesRepositoryImpl();

  getCatsList(
    page: number,
    dataViewListener: DataViewListener<CatModel[]>
  ): void {
    dataViewListener.showLoading();
    this.PicturesRepository.catsList(page, {
      onSuccess(data) {
        dataViewListener.hideLoading();
        dataViewListener.onSuccess(data);
      },
      onError(message) {
        dataViewListener.hideLoading();
        dataViewListener.showMessage(message);
      },
    });
  }

  getDogsList(
    page: number,
    dataViewListener: DataViewListener<DogModel[]>
  ): void {
    dataViewListener.showLoading();
    this.PicturesRepository.dogsList(page, {
      onSuccess(data) {
        dataViewListener.hideLoading();
        dataViewListener.onSuccess(data);
      },
      onError(message) {
        dataViewListener.hideLoading();
        dataViewListener.showMessage(message);
      },
    });
  }
  getFoxItem(page: number, dataViewListener: DataViewListener<FoxModel>): void {
    dataViewListener.showLoading();
    this.PicturesRepository.foxesItem(page, {
      onSuccess(data) {
        dataViewListener.hideLoading();
        dataViewListener.onSuccess(data);
      },
      onError(message) {
        dataViewListener.hideLoading();
        dataViewListener.showMessage(message);
      },
    });
  }
}
export default new PicturesService();

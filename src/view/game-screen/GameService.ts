import DataViewListener from "../../data/DataViewListener";
import { PicturesModel } from "../../data/model/PicturesModel";
import PicturesRepositoryImpl from "../../data/repository/photos/PhotoRepositoryImpl";

class PicturesService {
  PicturesRepository: PicturesRepositoryImpl = new PicturesRepositoryImpl();

  getPicturesList(dataViewListener: DataViewListener<PicturesModel[]>): void {
    this.PicturesRepository.picturesList({
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

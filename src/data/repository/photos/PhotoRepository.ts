import DataListener from "../../DataListener";
import { PicturesModel } from "../../model/PicturesModel";

export default interface PicturesRepository {
  picturesList(dataListener: DataListener<PicturesModel[]>): void;
}

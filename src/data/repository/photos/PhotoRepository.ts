import DataListener from "../../DataListener";
import { CatModel, FoxModel, DogModel } from "../../model/PicturesModel";

export default interface PicturesRepository {
  dogsList(dataListener: DataListener<DogModel[]>): void;
  catsList(dataListener: DataListener<CatModel[]>): void;
  foxesItem(dataListener: DataListener<FoxModel>): void;
}

import DataListener from "../../DataListener";
import {
  CatModel,
  FoxModel,
  DogModel,
  CatParamsModel,
} from "../../model/PicturesModel";

export default interface PicturesRepository {
  dogsList(page: number, dataListener: DataListener<DogModel[]>): void;
  catsList(page: number, dataListener: DataListener<CatModel[]>): void;
  foxesItem(page: number, dataListener: DataListener<FoxModel>): void;
}

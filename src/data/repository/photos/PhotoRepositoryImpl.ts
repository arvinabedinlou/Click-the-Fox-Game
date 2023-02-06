import DataListener from "../../DataListener";
import { DogModel, CatModel, FoxModel } from "../../model/PicturesModel";
import PicturesRepository from "./PhotoRepository";

export default class PicturesRepositoryImpl implements PicturesRepository {
  dogsList(dataListener: DataListener<DogModel[]>): void {
    throw new Error("Method not implemented.");
  }
  catsList(dataListener: DataListener<CatModel[]>): void {
    throw new Error("Method not implemented.");
  }
  foxesList(dataListener: DataListener<FoxModel[]>): void {
    throw new Error("Method not implemented.");
  }
}

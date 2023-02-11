export interface PicturesModel {
  dogs: DogModel;
  cats: CatModel;
  fox: FoxModel;
}
export interface DogModel {
  breeds: any[];
  categories: any[];
  id: string;
  url: string;
  type?: string;
}
export interface CatModel {
  breeds: any[];
  categories: any[];
  id: string;
  url: string;
  type?: string;
}
export interface FoxModel {
  name: string;
  type?: string;
  url?: string;
  image?: string;
}

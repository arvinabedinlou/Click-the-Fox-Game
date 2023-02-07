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
export interface CatParamsModel {
  size: string;
  mime_types: string;
  order: string;
  page: number;
  limit: number;
}
export interface FoxModel {
  name: string;
  type?: string;
  url?: string;
  image?: string;
}

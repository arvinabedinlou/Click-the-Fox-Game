import { useEffect, DependencyList, EffectCallback } from "react";
import { PicturesModel } from "../data/model/PicturesModel";

export const useLoadImage = (
  effect: EffectCallback,
  pictures: PicturesModel[],
  deps?: DependencyList
) => {
  useEffect(() => {
    const loadImage = (image: any) => {
      return new Promise((resolve, reject) => {
        console.log("2");
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => {
          resolve(image.url);
          loadImg.onerror = (err) => reject(err);
        };
      });
    };
    Promise.allSettled(pictures.map((image: PicturesModel) => loadImage(image)))
      .then(() => {
        console.log("loaded");
        if (pictures.length === 9) {
          effect();
        }
      })
      .catch((err) => console.log("Failed to load images", err));
  }, deps);
};

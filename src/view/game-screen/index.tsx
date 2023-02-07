import { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import Loading from "../../components/ui/loading/Loading";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import PicturesService from "./GameService";
import "./index.css";
const Index = () => {
  const [dogs, setDogs] = useState<any>([]);
  const [cats, setCats] = useState<any>([]);
  const [fox, setFox] = useState<any>({});
  const [imgsLoaded, setImgsLoaded] = useState(false);

  // loadings wa handled in second useEffect

  useEffect(() => {
    PicturesService.getDogsList({
      showMessage(message) {},
      onSuccess(data) {
        let typedDogs = addType(data, "dog");
        setDogs([...typedDogs]);
      },
    });
    PicturesService.getCatsList({
      showMessage(message) {},
      onSuccess(data) {
        let typedCats = addType(data, "cat");
        setCats([...typedCats]);
      },
    });
    PicturesService.getFoxItem({
      showMessage(message) {},
      onSuccess(data) {
        delete Object.assign(data, { url: data.image })["image"];
        setFox(data);
      },
    });
  }, []);

  // mix and shuffle data

  let mixPictures = [...dogs, ...cats, fox];
  const shuffledPictures = mixPictures.sort((a, b) => 0.5 - Math.random());

  //disabling view before images loading

  useEffect(() => {
    const loadImage = (image: any) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => {
          resolve(image.url);
          loadImg.onerror = (err) => reject(err);
        };
      });
    };
    Promise.all(shuffledPictures.map((image: any) => loadImage(image)))
      .then(() => {
        setImgsLoaded(true);
      })
      .catch((err) => console.log("Failed to load images", err));
  });
  return (
    <div>
      <Column>
        <SizedBox width="50%" backgroundColor={"#E8E2E2"}>
          {imgsLoaded ? (
            <div className="grid">
              {shuffledPictures?.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    {" "}
                    <img
                      // url keys not the same
                      src={item?.url}
                      loading="lazy"
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    ></img>
                  </div>
                );
              })}
            </div>
          ) : (
            <Loading />
          )}
        </SizedBox>
      </Column>
    </div>
  );
};
export default Index;

// adding type key to dog and cat Data and limit the quantity to 4

const addType = (data: any[], type: string) => {
  let finalData = data.filter((item, index) => {
    return index < 4 && (item["type"] = type);
  });
  return finalData;
};

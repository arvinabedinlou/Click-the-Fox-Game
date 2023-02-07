import { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import Loading from "../../components/ui/loading/Loading";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import Score from "../Score/Score";
import CountDownTimer from "../timer2/TimerPage";
import PicturesService from "./GameService";
import "./index.css";
const Index = () => {
  const [dogs, setDogs] = useState<any>([]);
  const [cats, setCats] = useState<any>([]);
  const [fox, setFox] = useState<any>({});
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [timeStart, setTimeStart] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [scoreItem, setScoreItem] = useState<any>({});
  const [showLoading, setShowLoading] = useState<boolean>(true);
  // loadings wa handled in second useEffect

  useEffect(() => {
    // const getPictures = () => {
    // setImgsLoaded(false);
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
  }, [page]);

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
          setTimeout(() => {
            resolve(image.url);
          }, 1000);
          loadImg.onerror = (err) => reject(err);
        };
      });
    };
    Promise.all(shuffledPictures.map((image: any) => loadImage(image)))
      .then(() => {
        setImgsLoaded(true);
        setShowLoading(false);
        setTimeStart(true);
      })
      .catch((err) => console.log("Failed to load images", err));
  });

  return (
    <div>
      <Column>
        <SizedBox width="50%" backgroundColor={"#E8E2E2"}>
          <Column>
            <SizedBox width="80%">
              <CountDownTimer
                startTime={timeStart}
                setStartTime={setTimeStart}
              />
              <Score item={scoreItem} />
            </SizedBox>
            {imgsLoaded === true && showLoading === false ? (
              <SizedBox>
                <div className="grid">
                  {shuffledPictures?.map((item: any, index: any) => {
                    return (
                      <div key={index}>
                        {" "}
                        <img
                          src={item?.url}
                          onClick={() => {
                            setPage(page + 1);
                            setShowLoading(true);
                            setTimeStart(false);
                            setDogs([]);
                            setCats([]);
                            setFox({});
                            setScoreItem(item);
                          }}
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </SizedBox>
            ) : (
              <Loading width={200} height={200} color={"blue"} />
            )}
          </Column>
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

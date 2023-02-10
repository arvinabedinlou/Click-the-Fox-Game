import { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import Loading from "../../components/ui/loading/Loading";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import Score from "../../components/Score/Score";
import CountDownTimer from "../../components/timer/TimerPage";
import PicturesService from "./GameService";
import "./index.css";
import { useLocation } from "react-router-dom";
const Index = () => {
  const [timeStart, setTimeStart] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [scoreItem, setScoreItem] = useState<any>({});
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [allPictures, setAllPictures] = useState<any>([]);
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    PicturesService.getDogsList({
      showMessage(message) {},
      onSuccess(data) {
        let typedDogs = addType(data, "dog");
        setAllPictures((prevState: any) => {
          return [...prevState, ...typedDogs];
        });
      },
    });
    PicturesService.getCatsList({
      showMessage(message) {},
      onSuccess(data) {
        let typedCats = addType(data, "cat");
        setAllPictures((prevState: any) => {
          return [...prevState, ...typedCats];
        });
      },
    });
    PicturesService.getFoxItem({
      showMessage(message) {},
      onSuccess(data) {
        delete Object.assign(data, { url: data.image })["image"];
        setAllPictures((prevState: any) => {
          return [...prevState, data];
        });
      },
    });
  }, [page]);

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
    Promise.allSettled(allPictures.map((image: any) => loadImage(image)))
      .then(() => {
        console.log("loaded");
        if (allPictures.length === 9) {
          setShowLoading(false);
          setTimeStart(true);
          setAllPictures((pictures: any) => {
            return pictures.sort(() => 0.5 - Math.random());
          });
        }
      })
      .catch((err) => console.log("Failed to load images", err));
  });

  const playerData = useLocation();
  
  return (
    <div>
      <Column>
        <SizedBox width="50%" height={450} backgroundColor={"#EFF5F5"}>
          <Column>
            <SizedBox width="80%">
              <CountDownTimer startTime={timeStart} playerData={playerData} />
              <Score
                item={scoreItem}
                changeScore={(e: any) => {
                  setScore(e);
                }}
              />
            </SizedBox>
            {showLoading ? (
              <Loading width={200} height={300} color={"blue"} />
            ) : (
              <SizedBox>
                <div className="grid">
                  {allPictures?.map((item: any, index: any) => {
                    return (
                      <div key={index}>
                        {" "}
                        <img
                          src={item.url}
                          onClick={() => {
                            setPage(page + 1);
                            setScoreItem(item);
                            setShowLoading(true);
                            setTimeStart(false);
                            setAllPictures([]);
                          }}
                          alt={item.url}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </SizedBox>
            )}
          </Column>
        </SizedBox>
      </Column>
    </div>
  );
};
export default Index;

const addType = (data: any[], type: string) => {
  let finalData = data.filter((item, index) => {
    return index < 4 && (item["type"] = type);
  });
  return finalData;
};

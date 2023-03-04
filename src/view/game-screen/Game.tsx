import { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import Loading from "../../components/ui/loading/Loading";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import Score from "../../components/score/Score";
import CountDownTimer from "../../components/timer/Timer";
import PicturesService from "./GameService";
import "./Game.css";
import { PicturesModel } from "../../data/model/PicturesModel";
import { useLoadImage } from "../../hooks/useLoadImage";

const GameScreen = () => {
  const [timeStart, setTimeStart] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [scoreItem, setScoreItem] = useState<PicturesModel>({
    url: "string",
    type: "",
    image: "",
  });
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [pictures, setPictures] = useState<PicturesModel[]>([
    {
      url: "string",
      type: "",
      image: "",
    },
  ]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    PicturesService.getPicturesList({
      showMessage(message) {
        // handling error messages
      },
      onSuccess(data: PicturesModel[]) {
        setImgLoaded(true);
        setPictures(data);
      },
    });
  }, [step]);

  useLoadImage(
    () => {
      setShowLoading(false);
      setTimeStart(true);
    },
    pictures,
    [imgLoaded]
  );

  const getNewPictures = (item: PicturesModel) => {
    setStep(step + 1);
    setScoreItem(item);
    setShowLoading(true);
    setTimeStart(false);
    setImgLoaded(false);
    setPictures([]);
  };

  return (
    <div>
      <Column>
        <SizedBox width="50%" height={450} backgroundColor={"#EFF5F5"}>
          <Column>
            <SizedBox width="80%">
              <CountDownTimer startTime={timeStart} score={score} />
              <Score
                item={scoreItem}
                changeScore={(e: number) => {
                  setScore(e);
                }}
              />
            </SizedBox>
            {showLoading ? (
              <Loading width={200} height={300} color={"blue"} />
            ) : (
              <SizedBox>
                <div className="grid">
                  {pictures?.map((item: PicturesModel, index: number) => {
                    return (
                      <div key={index}>
                        <PicturesBox
                          item={item}
                          getNewPictures={getNewPictures}
                        />
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
export default GameScreen;

const PicturesBox: React.FC<{
  item: PicturesModel;
  getNewPictures: (item: PicturesModel) => void;
}> = ({ item, getNewPictures }) => {
  return (
    <>
      <img
        src={item.url}
        onClick={() => {
          getNewPictures(item);
        }}
        alt={item.url}
        style={{ width: "100px", height: "100px" }}
      ></img>
    </>
  );
};

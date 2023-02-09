import { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import Loading from "../../components/ui/loading/Loading";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import Score from "../Score/Score";
import CountDownTimer from "../timer2/TimerPage";
import PicturesService from "./GameService";
import { after } from "underscore";
import "./index.css";
const Index = () => {
  const [dogs, setDogs] = useState<any>([]);
  const [cats, setCats] = useState<any>([]);
  const [fox, setFox] = useState<any>({});
  // const [imgsLoaded, setImgsLoaded] = useState(false);
  const [timeStart, setTimeStart] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [scoreItem, setScoreItem] = useState<any>({});
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [totalPictures, setTotalPictures] = useState<any>([]);
  // loadings wa handled in second useEffect

  // useEffect(() => {

  //   PicturesService.getDogsList({
  //     showMessage(message) {},
  //     onSuccess(data) {
  //       let typedDogs = addType(data, "dog");
  //       setDogs([...typedDogs]);
  //     },
  //   });
  //   PicturesService.getCatsList({
  //     showMessage(message) {},
  //     onSuccess(data) {
  //       let typedCats = addType(data, "cat");
  //       setCats([...typedCats]);
  //     },
  //   });
  //   PicturesService.getFoxItem({
  //     showMessage(message) {},
  //     onSuccess(data) {
  //       delete Object.assign(data, { url: data.image })["image"];
  //       setFox(data);
  //     },
  //   });
  // }, [page]);

  // mix and shuffle data

  // let mixPictures = [...dogs, ...cats, fox];
  // const shuffledPictures = mixPictures.sort((a, b) => 0.5 - Math.random());

  const onLoad: any = after(1, () => {
    console.log("loaded");
  });

  const [data, setData] = useState({ recentWo: null, woCount: null });

  const fetchData = async () => {
    //  const api = new ApiService();

    const recentWo = await PicturesService.getDogsList({
      showMessage(message) {},
      onSuccess(data) {
        let typedDogs = addType(data, "dog");
        setTotalPictures([...totalPictures, ...typedDogs]);
      },
    });
    const woCount = await PicturesService.getCatsList({
      showMessage(message) {},
      onSuccess(data) {
        let typedCats = addType(data, "cat");
        setTotalPictures([...totalPictures, ...typedCats]);
      },
    });
    setShowLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
            {showLoading === false ? (
              <SizedBox>
                <div className="grid">
                  {totalPictures?.map((item: any, index: any) => {
                    return (
                      <div key={index}>
                        {" "}
                        <img
                          src={item?.url}
                          onLoad={onLoad}
                          // onError={onComplete}
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

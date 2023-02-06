import React, { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import Loading from "../../components/ui/loading/Loading";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import { CatParamsModel } from "../../data/model/PicturesModel";
import PicturesService from "./GameService";
import "./index.css";
const Index = () => {
  const [dogs, setDogs] = useState<any>();
  const [dogLoading, setDogLoading] = useState<boolean>();
  const [cats, setCats] = useState<any>();
  const [catLoading, setCatLoading] = useState<boolean>();
  const [fox, setFox] = useState<any>();
  const [foxLoading, setFoxLoading] = useState<boolean>();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    PicturesService.getDogsList(page, {
      showLoading() {
        setDogLoading(true);
      },
      hideLoading() {
        setDogLoading(false);
      },
      showMessage(message) {
        //    setError({ hasError: true, errorMessage: message });
      },
      onSuccess(data) {
        let limitDogs = data.slice(0, 4);
        setDogs([...limitDogs]);
        //    setInAppMessages(data);
      },
    });
    PicturesService.getCatsList(page, {
      showLoading() {
        setCatLoading(true);
      },
      hideLoading() {
        setCatLoading(false);
      },
      showMessage(message) {
        //    setError({ hasError: true, errorMessage: message });
      },
      onSuccess(data) {
        let limitCats = data.slice(0, 4);
        setCats([...limitCats]);
      },
    });
    PicturesService.getFoxItem(page, {
      showLoading() {
        setFoxLoading(true);
      },
      hideLoading() {
        setFoxLoading(false);
      },
      showMessage(message) {
        //    setError({ hasError: true, errorMessage: message });
      },
      onSuccess(data) {
        setFox(data);
      },
    });
    console.log(fox);
  }, []);

  let pictures = [].concat(dogs, cats);
  let shuffledPictures = pictures.sort((a, b) => 0.5 - Math.random());
  return (
    <div>
      <Column>
        <SizedBox width="50%" backgroundColor={"#E8E2E2"}>
          {dogLoading === true || catLoading === true || foxLoading === true ? (
            <Loading />
          ) : (
            <div className="grid">
              {shuffledPictures?.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    {" "}
                    <img
                      src={item?.url}
                      loading="lazy"
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    ></img>
                  </div>
                );
              })}
            </div>
          )}
        </SizedBox>
      </Column>
    </div>
  );
};
export default Index;

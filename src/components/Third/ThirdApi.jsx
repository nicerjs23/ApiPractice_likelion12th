import { useEffect,useState } from "react";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";

const ThirdApi = () => {
  //state 작성
  const { VITE_NEWS_API_KEY } = import.meta.env;
  const [news, setNews]= useState([]);
  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}

  const fetchData = async() => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      console.log("세번째실습: ",response);

      // const sortedData = response.data.RealtimeCityAir.row.sort(
      //   (a, b) => b.PM10 - a.PM10
      // );
      // console.log("sortedDate: ", sortedData);
      setNews(news);
      console.log(news);
    }catch (error) {
      console.log("에러~!");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
          {news[0]}
        </BtnContainer>
      </BtnWrapper>
    </>
  );
};

export default ThirdApi;

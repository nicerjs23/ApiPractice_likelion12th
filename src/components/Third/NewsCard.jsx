import { useEffect, useState } from "react";
import { fetchNews } from "../Third/NewsApi";
import { styled } from "styled-components";


const CardWrapper= styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin-top: 30px; */
    /* gap:10px; */
`;

const ContentBox= styled.div`
    display: flex;
    flex-direction: column;
    
`;

const CardBox=styled.div`
    display: flex;
    width: 80vw;
    /* border: 1px solid white; */
    margin-top: 30px;
    gap:20px;
`;
const CardText=styled.div`
    display: flex;
    color: white;
    justify-content: flex-start;
    font-size: 16px;
    /* font-weight: bold; */
`;


const Image = styled.img`
    display: flex;
    width: 120px;
    height: 80px;
    flex-shrink: 0;
    object-fit: cover;
`;
const Placeholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:white;
    width: 120px;
    height: 80px;
    flex-shrink: 0;//이미지 크기가 줄어들지않게 하기위함 
    background-color: gray;
`;
const NewsCard = ({ cardNum }) => {
    //props로 cardNum에 입력한 숫자만큼 뉴스 출력 
    const [news, setNews] = useState([]);

    const getNews = async () => {
        try {
        const articles = await fetchNews();
        setNews(articles);
        } catch (error) {
        console.error("Error fetching news in NewsCard:", error);
        }
    };

    useEffect(() => {
        getNews();
    }, []);
        
    // const filteredNews = news.filter(article => article.urlToImage);
    //뉴스 api의 값들 전체가 이미지가 없는경우도 있어서 이 필터는 폐기
    return (
        <CardWrapper>
            <ContentBox>
                {news.slice(0, cardNum).map((article, index) => (
                    // console.log("불러온다: ", index, article.title),
                    <CardBox key={index}>
                        {article.urlToImage ? (
                            <Image src={article.urlToImage} alt={article.title} />
                        ) : (
                            <Placeholder>기본이미지</Placeholder>// 이미지가 없는 경우 회색 박스 출력
                        )}
                        <CardText>{article.title}</CardText>
                    </CardBox>
                ))}
            </ContentBox>
        </CardWrapper>
    );
};
    
    export default NewsCard;

    
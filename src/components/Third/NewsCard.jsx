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
    object-fit: cover;
`;
const NewsCard = ({ cardNum }) => {
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
        
    const filteredNews = news.filter(article => article.urlToImage);

    return (
        <CardWrapper>
            <ContentBox>
                {filteredNews.slice(0, cardNum).map((article, index) => (
                    <CardBox key={index}>
                        {article.urlToImage && (
                        <Image src={article.urlToImage} alt={article.title} />
                        )}
                        <CardText>{article.title}</CardText>
                    </CardBox>
                ))}
            </ContentBox>
        </CardWrapper>
    );
};
    
    export default NewsCard;

    
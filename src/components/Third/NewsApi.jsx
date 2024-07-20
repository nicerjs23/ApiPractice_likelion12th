import axios from "axios";

// Vite의 환경 변수를 가져오기 위해 import.meta.env 사용
const { VITE_NEWS_API_KEY } = import.meta.env;

export const fetchNews = async () => {
    try {
        const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${VITE_NEWS_API_KEY}`
        );
        // console.log("테스트: ",response);
        return response;
        // return response.data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};
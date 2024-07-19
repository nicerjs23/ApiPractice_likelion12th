
import Title from "../common/Title";
import Menu  from "../common/Menu";
import NewsCard from "../Third/NewsCard";

const NewsList = () => {
  const menuItems = ["전체", "스포츠", "연애", "경제"];
  return (
    <>
      <Title title="멋사 NEWS"/>
      <Menu menus={menuItems}/>
      
      <NewsCard cardNum={20}/>
      {/* 원하는 개수만큼 뉴스출력가능  */}
    </>
  ) 
};

export default NewsList;

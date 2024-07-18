import { styled } from "styled-components";

const MenuWrapper = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap:10px;
`;

const MenuText = styled.div`
    display: flex;
    padding: 10px 15px;
    font-size: 16px;
    /* font-weight: bold; */
`;

const ContentBox =styled.div`
    display: flex;
    width: 80vw;
    border: 1px solid white;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`;
//끌어다쓰는곳에서 배열을 선언하면 그 배열 값만큼 메뉴가 생기게 만듬
const Menu = ({menus}) => {
    return (
        <>
        <MenuWrapper>
            <ContentBox>
                {menus.map((menu, index) => (
                    <MenuText key={index}>{menu}</MenuText>
                ))}
            </ContentBox>
        </MenuWrapper>
        </>
    );
};

export default Menu;
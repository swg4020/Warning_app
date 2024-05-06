import { useQuery } from "@tanstack/react-query";
import { getAreaList } from "../../api";
import styled from "styled-components";
import { glovalcolor, glovalpadding } from "../../components/GlobalStyled";
import { Link } from "react-router-dom";
import { URL_IMG } from "../../components/url";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: ${glovalpadding.paddingO};
  margin: 0 auto;
  background-color: ${glovalcolor.color};
`;

const ConWrap = styled.div``;
const Con = styled.div`
  max-height: 200px;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
  background-color: #dbdbdb;
  border-radius: 10px;
  padding: 10px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Item = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    margin-top: 10px;
    font-weight: 600;
    opacity: 0.7;
  }
`;

const Button = styled.button`
  all: unset;
  margin-top: 15px;
  background-color: #1d1d1d;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
`;

const Bg = styled.div`
  width: 45%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Home = () => {
  const keywords = "부산광역시";

  const getLists = useQuery({
    queryKey: ["getArea4List", keywords],
    queryFn: getAreaList,
  });

  const mainData = getLists?.data?.EarthquakeOutdoorsShelter[1]?.row;

  console.log(mainData);

  return (
    <Container>
      {mainData && (
        <ConWrap>
          <Title>{keywords} 대피소 목록</Title>
          {mainData.map((data) => (
            <Con key={data.acmdfclty_sn}>
              <Link to={`/detail/${data.vt_acmd_psbl_nmpr}/${data.ctprvn_nm}`}>
                <Bg>
                  <img src={`${URL_IMG.park}`} alt={data?.acmdfclty_se_nm} />
                </Bg>
                <Item>
                  <h3>{data?.vt_acmdfclty_nm}</h3>
                  <p>지역 : {data?.ctprvn_nm}</p>
                  <p>관할청 : {data?.sgg_nm}</p>
                  <Button>자세히보기</Button>
                </Item>
              </Link>
            </Con>
          ))}
        </ConWrap>
      )}
    </Container>
  );
};

import { useQuery } from "@tanstack/react-query";
import { getAreaList } from "../../api";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
  position: relative;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  input {
    all: unset;
    width: 80%;
    height: 35px;
    padding: 0 15px;
    font-weight: 700;
  }
`;
const Text = styled.p`
  position: absolute;
  top: 70px;
  left: 45px;
  color: crimson;
  font-size: 14px;
  font-weight: 600;
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

export const Home = () => {
  const [keyword, setkeyword] = useState("부산광역시");

  const getList = useQuery({
    queryKey: ["getArea4List", keyword],
    queryFn: getAreaList,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { search: Sdata } = data;
    setkeyword(Sdata);
    reset();
  };
  console.log(keyword);
  const searchData = getList?.data?.EarthquakeOutdoorsShelter[1]?.row;
  console.log(searchData);
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("search", {
            required: "내용을 입력해주세요.",
          })}
          type="text"
          placeholder="지역을 입력해주세요(부산광역시)"
        />
      </Form>
      {errors ? <Text>{errors?.search?.message}</Text> : ""}




      {searchData && (
        <ConWrap>
          {searchData.map((data) => (
            <Con key={data.acmdfclty_sn}>
              <Link to={`/detail/${data.acmdfclty_sn}`}>
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

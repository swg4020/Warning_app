import { Link } from "react-router-dom";
import { URL_IMG } from "../../components/url";
import styled from "styled-components";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getSearchAreaList } from "../../api";
import { glovalcolor, glovalpadding } from "../../components/GlobalStyled";

const Container = styled.section`
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

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 10px;
`;

const Con = styled.div``;

const Bg = styled.div``;

export const Search = () => {
  const [keyword, setkeyword] = useState("");
  const getSearchList = useQuery({
    queryKey: ["getArea4List", keyword],
    queryFn: getSearchAreaList,
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
  const searchData = getSearchList?.data?.EarthquakeOutdoorsShelter[1]?.row;
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
      {keyword === "" ? (
        ""
      ) : (
        <>
          {searchData && (
            <ConWrap>
              {keyword ? <Text>"{keyword}"의 검색 결과</Text> : ""}
              {searchData.map((data) => (
                <Con key={data.acmdfclty_sn}>
                  <Link to={`/detail/${data.acmdfclty_sn}`}>
                    <Bg>
                      <img
                        src={`${URL_IMG.park}`}
                        alt={data?.acmdfclty_se_nm}
                      />
                    </Bg>
                    <h3>{data?.vt_acmdfclty_nm}</h3>
                    <p>관할청 : {data?.sgg_nm}</p>
                  </Link>
                </Con>
              ))}
            </ConWrap>
          )}
        </>
      )}
    </Container>
  );
};

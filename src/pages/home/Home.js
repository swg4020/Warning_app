import { useQuery } from "@tanstack/react-query";
import { getAreaList } from "../../api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";


const Container = styled.div``;
const Form = styled.form``;


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
  console.log(getList?.data?.EarthquakeOutdoorsShelter[1]?.row);

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
    </Container>
  );
};

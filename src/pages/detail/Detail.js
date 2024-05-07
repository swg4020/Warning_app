import styled from "styled-components";
import { URL_IMG } from "../../components/url";

import { useParams } from "react-router-dom";
import { getAreaList } from "../../api";
import { useQuery } from "@tanstack/react-query";

const ConWrap = styled.div``;

const Con = styled.div``;

const Item = styled.div``;

const Bg = styled.div``;

export const Detail = () => {
  const { vt_acmd_psbl_nmpr, ctprvn_nm } = useParams();
  const keywords = ctprvn_nm;
  const num = vt_acmd_psbl_nmpr;
  const getLists = useQuery({
    queryKey: ["getArea4List", keywords],
    queryFn: getAreaList,
  });

  const data = getLists?.data?.EarthquakeOutdoorsShelter[1]?.row;
  console.log(data);

  return;
  // (
  //   <ConWrap>
  //     {tdata && (
  //       <Con>
  //         <Bg>
  //           <img src={`${URL_IMG.park}`} alt={tdata?.acmdfclty_se_nm} />
  //         </Bg>
  //         <Item>
  //           <h3>{tdata?.vt_acmdfclty_nm}</h3>
  //           <p>지역 : {tdata?.ctprvn_nm}</p>
  //           <p>관할청 : {tdata?.sgg_nm}</p>
  //         </Item>
  //       </Con>
  //     )}
  //   </ConWrap>
  // );
};

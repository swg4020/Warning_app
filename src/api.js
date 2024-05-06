import axios from "axios";

const apiKey =
  "uzqzCV0OaR8IQR7UXErSXf++hcUKyQRCS2CT6q/LrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w==";

//행정안전부_지진 옥외대피장소
const instanc = axios.create({
  baseURL: "http://apis.data.go.kr/1741000/EmergencyAssemblyArea_Earthquake4/",
  params: {
    serviceKey: apiKey,
    pageNo: 1,
    numOfRows: 10,
    type: `JSON`,
  },
});
const instan = axios.create({
  baseURL: "http://apis.data.go.kr/1741000/EmergencyAssemblyArea_Earthquake4/",
  params: {
    serviceKey: apiKey,
    numOfRows: 10,
    type: `JSON`,
  },
});
export const getAreaList = ({ queryKey }) => {
  const [getArea4List, keywords] = queryKey;
  return instanc
    .get(`${getArea4List}?ctprvn_nm=${keywords}`)
    .then((res) => res.data);
};

export const getSearchAreaList = ({ queryKey }) => {
  const [getArea4List, keyword, page] = queryKey;
  const search = `ctprvn_nm=${keyword}`;
  // const pages = Number(page);
  return instan
    .get(`${getArea4List}?${search}&pageNo=${page}`)
    .then((res) => res.data);
};



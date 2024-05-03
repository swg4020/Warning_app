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

export const getAreaList = ({ queryKey }) => {
  const [getArea4List, keyword] = queryKey;
  return instanc
    .get(`${getArea4List}?ctprvn_nm=${keyword}`)
    .then((res) => res.data);
};



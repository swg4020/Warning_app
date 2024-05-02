import axios from "axios";

const apiKey =
  "uzqzCV0OaR8IQR7UXErSXf++hcUKyQRCS2CT6q/LrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w==";

//
const instanc = axios.create({
  baseURL: "https://apis.data.go.kr/1741000/EarthquakeIndoors3/",
  params: {
    serviceKey: apiKey,
    pageNo: 2,
    numOfRows: 10,
    type: `JSON`,
  },
});

export const getEarthquakeIndoorsList = ({ queryKey }) => {
  const [getEarthquakeIndoors3List, key] = queryKey;
  return instanc
    .get(`${getEarthquakeIndoors3List}?`)
    .then((res) => res.data);
};

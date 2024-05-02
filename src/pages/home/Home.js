import { useQuery } from "@tanstack/react-query";
import { getEarthquakeIndoorsList } from "../../api";

export const Home = () => {
  const getList = useQuery({
    queryKey: ["getEarthquakeIndoors3List", "key"],
    queryFn: getEarthquakeIndoorsList,
  });

  console.log(getList);

  return <div>home</div>;
};

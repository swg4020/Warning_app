import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { routes } from "./routes";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.detail} element={<Detail/>} />
      </Routes>
    </HashRouter>
  );
}

export default Router;

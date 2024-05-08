import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { routes } from "./routes";
import { Search } from "./pages/search/Search";

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.search} element={<Search />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "./store";
import { MenuButton } from "./components/MenuButton";
import { Menu } from "./components/Menu";
import { Start } from "./components/Start";
import { Higher } from "./components/Higher";
import { Lower } from "./components/Lower";
import { OneMore } from "./components/OneMore";
import { OneLess } from "./components/OneLess";
import { Between } from "./components/Between";
import { Add } from "./components/Add";
import { Subtract } from "./components/Subtract";

const App = () => (
  <StoreProvider>
    <Router>
      <div className="container mx-auto">
        <MenuButton />
        <Menu />

        <Routes>
          <Route path="/one-more" element={<OneMore />} />
          <Route path="/one-less" element={<OneLess />} />
          <Route path="/between" element={<Between />} />
          <Route path="/add" element={<Add />} />
          <Route path="/subtract" element={<Subtract />} />
          <Route path="/higher" element={<Higher />} />
          <Route path="/lower" element={<Lower />} />
          <Route path="/" element={<Start />} />
        </Routes>
      </div>
    </Router>
  </StoreProvider>
);

export default App;

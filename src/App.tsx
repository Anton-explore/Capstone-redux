import './assets/styles/App.scss';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Inner from "./pages/Inner";


const App = () => {

  // const isNotFoundRoute = !!useRouteMatch("/not-found");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/*" element={<Inner />}>
          <Route path=":section?" element={<Inner />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

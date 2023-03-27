import './assets/styles/App.scss';
import { Navigate, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Inner from "./pages/Inner";
import NotFound from './components/NotFound';


const App = () => {

  // const isNotFoundRoute = !!useRouteMatch("/not-found");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/*" element={<Inner />}>
          <Route path=":section?" element={<Inner />} />
        </Route>
        <Route path="/not-found" element={<NotFound/>} />
        <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;

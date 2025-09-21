import "./App.css";
import MainComponent from "./component/MainComponent";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preview_page from "./component/preview/Preview_page";
import Preview_page_1 from "./component/preview/Preview_page_1";
import NotFound from "./component/notFound/NotFound";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<MainComponent />}></Route>
            <Route path="/preview" element={<Preview_page />}></Route>
            <Route path="/preview/1" element={<Preview_page_1 />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

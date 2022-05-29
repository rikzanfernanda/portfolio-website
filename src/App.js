import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Web from "./pages/Web";
import Editing from "./pages/Editing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
            <Route path='/web' element={<Web />} />
            <Route path='/editing' element={<Editing />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

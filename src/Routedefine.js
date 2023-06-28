import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import FullView from "./components/collection/Fullview";
function Routedefine(){
return(
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='/fullview'element={<FullView/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default Routedefine;
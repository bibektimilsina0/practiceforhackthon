import Navbar from "../Navbar";
import Filter from "./Filter";
import Option from './Option'
import Slider from "./Slider";
function Explore(){


    return(
        <div>
            <Navbar/>
            <div>
                <Slider/>
                <Option/>
                <Filter/>
            </div>
        </div>
    )
}
export default Explore;
import Addplace from "../AddPlace";
import Navbar from "../Navbar";
import Filter from "./Filter";
import Option from './Option'
import Slider from "./Slider";
import AddPlace from "../AddPlace";
import Search from "./Search";
function Explore(){


    return(
        <div>
            <Navbar/>
            <div>
                <Slider/>
                <Search/>
                {/* <Filter/> */}
                <Option/>
                <AddPlace/>
            </div>
        </div>
    )
}
export default Explore;
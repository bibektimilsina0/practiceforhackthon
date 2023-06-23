// import Niranjanapi from './components/Niranjanapi'
import Vr from './VrApp'
import Shortdesc from './Shortdesc';
import Navbar from './Navbar';
import adv from '../image/adventure.jpeg'
import culture from '../image/culture.jpeg';
import nature from '../image/nature.jpeg';
import wellness from '../image/wellness.jpeg'
import other from '../image/others.jpeg'
// import FullView from './components/FullView';
import '../vrapp.css'
function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className='left'>
                <Vr width={window.clientWidth} height={window.clientHeight} />
                <Shortdesc />
            </div>
            <div className='right font-mono '>
                <div>
                 <h1 className='text-2xl mt-3 text-lime-500'>EXPLORE </h1>
                    <h1 className='text-2xl mt-3 text-orange-900'>NEPAL!</h1>
                    <h4 className='text-lg mt-3 font-mono  '>#LifetimeExperiences</h4>
                </div>
                <div>
                    <h4 className="text-lg" >Advanture</h4>
                    <img src={adv} alt="" style={{ height: '130px', width: '130px' }} />
                </div>
                <div>
                    <h4 className="text-lg" >Culture</h4>
                    <img src={culture} alt="" className="" style={{ height: '130px', width: '130px' }} />
                </div>
                <div>
                    <h4 className="text-lg" >Nature</h4>
                    <img src={nature} alt="" className="" style={{ height: '130px', width: '130px' }} />
                </div>
                <div>
                    <h4 className="text-lg" >Wellness</h4>
                    <img src={wellness} alt="" className="" style={{ height: '130px', width: '130px' }} />
                </div>
                <div>
                <h4 className="text-lg" >Other</h4>
                <img src={other} alt="" className="" style={{ height: '130px', width: '130px' }} />
                </div>
            </div>


            {/* <FullView /> */}
        </div >

    );
}
export default Home;
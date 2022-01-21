import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Slider1 from '../components/Slider1';

const Home = () => {
  return <div>
            <Announcement/>
            <Navbar/>
            <Slider1/>
            {/* <Slider/> */}
            
        </div>;
};

export default Home;
// import ClearIcon from '@material-ui/icons/Clear';
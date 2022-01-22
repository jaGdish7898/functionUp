import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Slider1 from '../components/Slider1';

const Home = () => {
  return <div>
            <Announcement/>
            <Navbar/>
            <Slider1/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
            {/* <Slider/> */}
            
        </div>;
};

export default Home;
// import ClearIcon from '@material-ui/icons/Clear';
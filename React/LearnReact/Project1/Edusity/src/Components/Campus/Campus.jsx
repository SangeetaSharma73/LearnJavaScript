import React,{useState,useEffect} from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from '../../assets/white-arrow.png';
const Campus = () =>{
    return (
      <div className="campus">
        <div className="gallery">
          <img src={gallery_1} alt="gal1" className="img" />
          <img src={gallery_2} alt="gal2" className="img" />
          <img src={gallery_3} alt="" className="img" />
          <img src={gallery_4} alt="" className="img" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
      </div>
    );
}

export default Campus;

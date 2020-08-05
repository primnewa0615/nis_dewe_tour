import React from 'react';
import Card from './Card';
import card from '../asset/img/Guarantee.png';
import card1 from '../asset/img/Guarantee-1.png';
import card2 from '../asset/img/TravellerLove.png';
import card3 from '../asset/img/TravellerLove-1.png';
import '../asset/style/style.css'


function Content(){
    return(
      <div className="Container-content">
       
        <div className="wrap1-content">
          <img className="card" src={card} alt="" />
          <img className="card" src={card1} alt="" />
          <img className="card" src={card2} alt="" />
          <img className="card" src={card3} alt="" />
        </div>
      
          <h1>Group Tour</h1>
        <div className="wrap2-content">
          <Card
            gambar={process.env.PUBLIC_URL + 'img/Rectangle8.png'}
            name= "6D/4N Fun Tassie Vacation ..."
            idr = "IDR. 12,398,000"
            country = "Australia"
          />
          <Card
            gambar={process.env.PUBLIC_URL + 'img/Rectangle8-2.png'}
            name= "6D/4N Exciting Summer in ..."
            idr = "IDR. 10,288,000"
            country = "South Korea"
          />
          <Card
            gambar={process.env.PUBLIC_URL + 'img/Rectangle8-4.png'}
            name= "8D/6N Wonderful Autum ..."
            idr = "IDR. 28,999,000"
            country = "Japan"
          />
          <Card
            gambar={process.env.PUBLIC_URL + 'img/Rectangle8-1.png'}
            name= "4D/3N Overland Jakarta B..."
            idr = "IDR. 3,188,000"
            country = "Indonesia"
          />
          <Card
            gambar={process.env.PUBLIC_URL + 'img/Rectangle8-3.png'}
            name= "4D/3N Labuan Bajo Delight"
            idr = "IDR. 10,488,000"
            country = "Indonesia"
          />
           <Card
            gambar={process.env.PUBLIC_URL + 'img/Rectangle8-5.png'}
            name= "5D/4N Magic Tokyo Fun"
            idr = "IDR. 11,188,000"
            country = "Japan"
          />
        </div>
       
      </div>
    )
  }

  export default Content;
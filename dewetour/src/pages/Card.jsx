import React from 'react';
import '../asset/style/style.css';


function Card(props){
    return(
      <div className="card-destination">
        <img src={props.gambar} alt="" />
        <h2>{props.name}</h2>
        <div className="foot-card">
          <h4>{props.idr}</h4>
          <p>{props.country}</p>
        </div>
      </div>
    )
  }

  export default Card;
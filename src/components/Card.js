import React from 'react';
import Card from '../styles/card.module.css';


const CardComponent = ({ title, skill, desc, image }) => {
  return (
    <>
      <div className={Card.box}>
        <img src={image} className={Card.imageData} />
        <div className={Card.wrapper}>
          <h2 style={{ fontWeight: 700 }}>{title}</h2>
          <p style={{ fontSize: 14, fontWeight: 400 }}>{desc}</p>
          {/* <div className={Card.skillWrapper}>
            <h3 className={Card.skill}>{skill}</h3>
            <h3 className={Card.skill}>{skill}</h3>
            <h3 className={Card.skill}>{skill}</h3>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default CardComponent;

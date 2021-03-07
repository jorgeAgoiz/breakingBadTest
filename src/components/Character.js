import './Character.css';
import React from 'react';

const Character = (props) => {
    console.log(props.charac);
    return (
        <div className="characterCard">
            <h1>{props.charac.name}</h1>
            <h3>{props.charac.nickname}</h3>
            <p>{props.charac.status}</p>
            <img src={props.charac.img} alt={props.charac.portrayed} />
        </div>
    );
};

export default Character;
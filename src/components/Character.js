import './Character.css';
import React from 'react';

const Character = (props) => {

    let result;

    if (!props.charac.name) {
        result = (
            <div className="loadTitle">
                <h3>Search Your Character</h3>
            </div>
        );
    } else {
        result = (
            <div className="characterCard">
                <h1>{props.charac.name}</h1>
                <h3>{props.charac.nickname}</h3>
                <p>{props.charac.status}</p>
                <img src={props.charac.img} alt={props.charac.portrayed} />
            </div>
        );
    }
    return result;
};

export default Character;
import React from 'react';
import "bulma/css/bulma.min.css"; 

function TodoIcon({type}){
    return (
        <span 
        className={`icon has-text-danger-${type}`}>
            <i className="fas fa-ban"></i>
        </span>
    )
}


export {TodoIcon}
import React from 'react';
import  './SeasonDisplay.css';

const SeasonDisplay = props =>{
    
    const season = getSeason(props.lat,new Date().getMonth());
    const {text, iconName}  = seasonConfig[season];

    return (
     <div className={`season-display ${season}`}>
         <i className={`${iconName} massive icon icon-left` } />
        <h1>{text}</h1>
        <i className={`${iconName} massive icon icon-right` } />
     </div>
    );
};

const seasonConfig = {
    summer : {
        text : 'Let\'s heat the beach',
        iconName : 'sun'
    },
    winter : {
        text : 'Burr, It\'s Chilly',
        iconName : 'snowflake'
    }
}
const getSeason = (lat,month) => {
    if(month > 2 && month <9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter':'summer' ;
    }
}


export default SeasonDisplay;
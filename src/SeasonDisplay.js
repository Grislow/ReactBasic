import './SeasonDisplay.css';
import React from 'react';

// Config object
const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        icon: 'massive sun icon'
    },
    winter: {
        text: 'Burr, it is chilly',
        icon: 'massive snowflake icon'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());

    // THIS CAN BE OMITTED THX TO CONFIG OBJECT
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun'; 
    const { text, icon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${icon}`} />
            <h1 className={`header`}>{text}</h1>
            <i className={`icon-right ${icon}`} />
        </div>
    );
};

export default SeasonDisplay;
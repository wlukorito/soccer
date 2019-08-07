import React from 'react';
import Season from './Season';

const SeasonList = ({ seasons, leagueName, onSeasonSelect }) => {
    return seasons.map(season => {
        return <Season season={season} key={season.id} leagueName={leagueName} onSeasonSelect={onSeasonSelect}/>;
    });
};

export default SeasonList;

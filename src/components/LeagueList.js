import React from 'react';

import League from './League';

class LeagueList extends React.Component {

    render(){
        return this.props.leagues.map(league => {
            return <League league={league} key={league.id} onSeasonSelect={this.props.onSeasonSelect}/>;
        });
    }
}

export default LeagueList;

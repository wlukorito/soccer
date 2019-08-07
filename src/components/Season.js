import React from 'react';
import endPoint from '../api/soccerEndPoint'

class Season extends React.Component {
    state = { 
        fixtures: [],
        table: []
    };

    getFixtures = async (league, season) => {
        const fixtures = await endPoint.get('/fixtures', {
            params: {
                league: league,
                season: season
            }
        });
    
        this.setState({ fixtures: fixtures.data});
    }

    getTable = async seasonId => {
        const table = await endPoint.get('/teamStages', {
            params: {
                stageId: seasonId
            }
        });

        this.setState({ table: table.data});
    }

    componentDidMount(){
        const { season, leagueName } = this.props;
        this.getFixtures(leagueName, season.name);
        this.getTable(season.id);
    }

    render(){
        const { season, leagueName, onSeasonSelect } = this.props;
        return <div className="text-center" onClick={() => onSeasonSelect(season.id, season.name, leagueName, this.state.fixtures, this.state.table)}>{season.name}</div>;
    }
}

export default Season;

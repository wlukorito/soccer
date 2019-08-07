import React from 'react';

import SeasonList from './SeasonList'
import endPoint from '../api/soccerEndPoint';

class League extends React.Component {
    state = { seasons: []};

    getSeasons = async leagueName => {
        const res =  await endPoint.get('/stages', {
            params:{
                league: leagueName
            }
        });

        this.setState({ seasons: res.data});
    };
    
    componentDidMount(){
        this.getSeasons(this.props.league.name);
        
    }

    decodeLeague = longName => {
        switch(longName){
            case 'KENYA PREMIER LEAGUE':
                return 'KPL';
            case 'AFRICAN CUP OF NATIONS':
                return 'AFCON';
            case 'ENGLISH PREMIER LEAGUE':
                return 'EPL';
            case 'COPA AMERICA':
                return 'COPA AM';
            default:
                return longName;
        }
    }

    render() {
        const league = this.props.league;
        const lId = `lig${league.id}`;
        return (
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                            <button className="btn btn-primary btn-block" type="button" data-toggle="collapse" data-target={`#${lId}`} aria-expanded="true" aria-controls={lId}>
                                {this.decodeLeague(league.name)}
                            </button>
                    </div>

                    <div id={lId} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <SeasonList seasons={this.state.seasons} leagueName={league.name} onSeasonSelect={this.props.onSeasonSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default League;

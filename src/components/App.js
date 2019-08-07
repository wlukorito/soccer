import React from 'react';

import LeagueList from './LeagueList';
import endPoint from '../api/soccerEndPoint';
import Fixtures from './Fixtures';
import Table from './Table';
import './App.css';

class App extends React.Component {
    state = {
        leagues: [],
        currentLeague: '',
        seasonId: 0,
        seasonName: '',
        fixtures: [],
        table: [],
        teams: null
    };

    getLeagues = async () => {
        const res = await endPoint.get('/all', {});
        this.setState({ leagues: res.data });
    }

    getTeams = async () => {
        const allTeams = await endPoint.get('/teams', {});

        const teamMap = new Map();
        allTeams.data.forEach(team => {
            teamMap.set(team.id, team.name);
        });

        this.setState({ teams: teamMap });
    }

    onSeasonSelect = (seasnId, seasnName, leagueName, fixtures, table) => {
        this.setState({ currentLeague: leagueName, seasonId: seasnId, seasonName: seasnName, fixtures: fixtures, table: table });
    }

    componentDidMount() {
        this.getLeagues();
        this.getTeams();
    }

    render() {
        return (
            <div className="container jumbotron mt-2 pt-2">
                <h6 className="display-4 text-center">Soccer Scores Live</h6>
                <div className="row border border-white pt-2">
                    <div className="col-2">
                        <div className="card">
                            <div className="card-header text-center">
                                <small className="text-muted">TOURNAMENTS</small>
                            </div>
                        </div>
                        <LeagueList leagues={this.state.leagues} onSeasonSelect={this.onSeasonSelect} />
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header text-center text-muted text-uppercase">
                                <small>Fixtures & Live Scores</small>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Fixtures fixtures={this.state.fixtures} teamNames={this.state.teams} />
                        </ul>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header text-center">
                            <small className="text-muted">{this.state.currentLeague}&emsp;{this.state.seasonName}&emsp; Standing</small>
                            </div>
                        </div>
                            
                            <table className="table table-sm table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Team</th>
                                        <th scope="col">Games</th>
                                        <th scope="col">GF</th>
                                        <th scope="col">GA</th>
                                        <th scope="col">GD</th>
                                        <th scope="col">Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Table table={this.state.table} teamNames={this.state.teams} />
                                </tbody>
                            </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;

import React from 'react';


const Fixture = ({ fixture, teams }) => {
    return (
        <li className="list-group-item">
            {(fixture.matchDate).substring(0,10)}&emsp;{teams.get(fixture.homeTeam)}&emsp;     
            <button className="btn btn-primary"> {fixture.homeTeamGoal} : {fixture.awayTeamGoal}</button>
            &emsp;{teams.get(fixture.awayTeam)}
        </li>
    );
};

export default Fixture;

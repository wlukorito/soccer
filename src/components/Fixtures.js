import React from 'react';
import Fixture from './Fixture';

const Fixtures = (props) => {
   return props.fixtures.map(fixture => <Fixture key={fixture.id} fixture={fixture} teams={props.teamNames}/>);
} 

export default Fixtures;
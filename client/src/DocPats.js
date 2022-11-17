import { useState, useEffect } from 'react';
import DocPatDis from './DocPatDis';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

function DocPats({ pats }) {

    const patDispaly = pats.map((pat) => {
        return <DocPatDis key={pat.id} pat={pat} /> 
    })

    return(
        <div>
            <h3>Patients</h3>
        <Card.Group itemsPerRow={3} centered>
            {patDispaly}
        </Card.Group>
        </div>
    )
}

export default DocPats
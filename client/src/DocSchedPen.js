import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import DocSPMap from "./DocSPMap";
import { Card } from 'semantic-ui-react';

function DocSchedPen({ pending, doc, onDeleteApp, onUpdateApp, pats, patsNotesHelper }) {
    const [appmts, setAppmts] = useState([])
    

    let navigate = useNavigate()
    let params = useParams()
    
    useEffect(() => {
        setAppmts(pending)
    }, [pats])
    
    
    

    const pendingMap = appmts.map((apmt) => <DocSPMap apmt={apmt} doc={doc} onDeleteApp={onDeleteApp} onUpdateApp={onUpdateApp} />
        
    )

    return(
        <div>
            <h4>Pending Confirmation</h4>
            <Card.Group itemsPerRow={1}>{pendingMap}</Card.Group>
        </div>
    )
}

export default DocSchedPen
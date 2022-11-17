import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import { Button, Card } from "semantic-ui-react";

function DocPatsNotes({ pats }) {
    let params = useParams()
    const pat = pats.find((pat) => parseInt(pat.id) === parseInt(params.id))
    console.log(pat)

    const noteDisplay = pat.practitioners_notes.map((nt) => {
        return <Card.Group itemsPerRow={1}>{nt.notes.map((n) => {
            return (
                <Card>
                    <Card.Content>
                        {n.note}
                    </Card.Content>
                    <Card.Content>
                    </Card.Content>
                </Card>
            )
        })}</Card.Group>
    }) 
    

    return(
        <div>
            <h3>Notes for: {pat.first_name} {pat.last_name}</h3>
            <Button as={Link} color='blue' to={`/docpage/patients/notes/${params.id}/write`}>New Note</Button>
            <br></br>
            <br></br>
            <div>{noteDisplay}</div>
        </div>
    )
}

export default DocPatsNotes
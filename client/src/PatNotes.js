import { Message, Card, Icon, Container } from 'semantic-ui-react';

function PatNotes({ pat }) {

    const noteDisplay = pat.practitioners_notes.map((pracNote) => {
        const notes =  pracNote.notes.map((nt) => {
            return (
                <Card raised fluid>
                    <Card.Content textAlign='center'>
                            {nt.note}
                        </Card.Content>
                        <Card.Content textAlign='right'>
                        On: {nt.created_at}
                        </Card.Content>
                </Card>                
            )
        })

        return (
            <div className='noteDivIn'>
                <h3>Notes from Practitioner {pracNote.practitioner.last_name}</h3>
                <Card.Group centered itemsPerRow={1}>{notes}</Card.Group>
            </div>
        )
    })

    return(
        <div>
            {noteDisplay}
        </div>
    )
}

export default PatNotes
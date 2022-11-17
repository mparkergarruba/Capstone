import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'semantic-ui-react';

function DocPatDis({ pat }) {

    return(
        <Card>
            <Card.Content>
            <Card.Header>{pat.first_name} {pat.last_name}</Card.Header>
            </Card.Content>
            <Card.Content>
            <Button as={Link} color='blue' to={`/docpage/patients/appointments/${pat.id}`}>Appointments</Button>
            <Button as={Link} color='blue' to={`/docpage/patients/notes/${pat.id}`}>Notes</Button>
            </Card.Content>
        </Card>
    )
}
export default DocPatDis
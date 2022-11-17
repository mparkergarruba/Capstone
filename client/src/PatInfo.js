import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'semantic-ui-react';

function PatInfo({ pat }) {

    return(
        <div>
            <Card.Group centered>
            <Card raised className='PatInfo'>
            <Card.Content>
            <Card.Header>General Information</Card.Header>
            <Card.Description as='h4'>Full Name: {pat.first_name} {pat.last_name}</Card.Description>
            <Card.Description>Age: {pat.age}</Card.Description>
            <Card.Description>Address: {pat.address}</Card.Description>
            <Card.Description>Phone #: {pat.phone}</Card.Description>
            <Card.Description>Email: {pat.email}</Card.Description>
            </Card.Content>
            <Card.Content>
            <Button color='blue' as={Link} to='/patient/profile/edit'>Edit Info</Button>
            </Card.Content>
            </Card>
            </Card.Group>
        </div>
    )
}

export default PatInfo
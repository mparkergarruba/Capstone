import { Link } from 'react-router-dom';
import { Menu, Icon, Button, Container } from 'semantic-ui-react'

function PatNavBar() {

    return(
        <div>
            <Container fluid>
            <Menu fluid borderless compact icon='labeled'>
                <Menu.Item>
                    <Button as={Link} color='blue' to='/patient'>
                        <Icon link name='user' />
                        Home
                    </Button>
                </Menu.Item> 
                <Menu.Item>
                    <Button as={Link} color='blue' to={`/patient/notes`}>
                        <Icon link name='pen square' />
                        Notes
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as={Link} color='blue' to={`/patient/profile`}>
                        <Icon link name='street view' />
                        General Info
                    </Button>
                </Menu.Item> 
                <Menu.Item>
                    <Button as={Link} color='blue' to="/patient/forms">
                        <Icon link name='file alternate' />
                        Forms
                    </Button>
                </Menu.Item> 
                <Menu.Item>
                    <Button as={Link} color='blue' to="/patient/appointments">
                        <Icon link name='calendar alternate' />
                        Appointments
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as={Link} color='blue' to="/logout">
                        <Icon link name='window close' />
                        Logout
                    </Button>
                </Menu.Item> 
            </Menu>
            </Container>
        </div>
    )
}

export default PatNavBar
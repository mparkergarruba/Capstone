import { Link } from 'react-router-dom';
import { Menu, Icon, Button, Container } from 'semantic-ui-react'

function NavBar({ children }) {

    return(
        <div className='navDiv'>
            <Container fluid>
            <Menu fluid borderless compact size='large' icon='labeled'>
                <Menu.Item as='a' >
                    <Button color='blue' fluid as={Link} to="/">
                        <Icon link name='home' />
                        Home
                    </Button>
                </Menu.Item>
                <Menu.Item as='a' >
                    <Button color='blue' fluid as={Link} to="/signup">
                        <Icon link name='user plus' />
                        Sign Up
                    </Button>
                </Menu.Item>
                <Menu.Item as='a' >
                    <Button color='blue' fluid as={Link} to="/login">
                        <Icon link name='user' />
                        Patient Login
                    </Button>
                </Menu.Item>
                <Menu.Item as='a' >
                    <Button color='blue' fluid as={Link} to="/docin">
                        <Icon link name='user md' />
                        Practitioner
                    </Button>
                </Menu.Item>
            </Menu>
            </Container>
        </div>    
    )
}

export default NavBar
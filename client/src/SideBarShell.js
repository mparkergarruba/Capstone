import NavBar from "./NavBar";
import DocNavBar from "./DocNavBar";
import PatNavBar from "./PatNavBar";
import { Sidebar, Segment, Menu, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function SideBarShell({children}) {
    console.log(children)

    return(

       
            <Sidebar as={Menu} icon='labeled' vertical visible width='thin'>
                <Menu.Item as='a' >
                    <Button color='violet' fluid as={Link} to="/">
                        <Icon name='home' />
                        Home
                    </Button>
                </Menu.Item>
                <Menu.Item as='a' >
                    <Button color='violet' fluid as={Link} to="/signup">
                        <Icon name='user plus' />
                        Sign Up
                    </Button>
                </Menu.Item>
                <Menu.Item as='a' >
                    <Button color='violet' fluid as={Link} to="/login">
                        <Icon name='user' />
                        Login
                    </Button>
                </Menu.Item>
                <Menu.Item as='a' >
                    <Button color='violet' fluid as={Link} to="/docin">
                        <Icon name='user md' />
                        Practitioner
                    </Button>
                </Menu.Item>
            </Sidebar>
            
       
    )
}

export default SideBarShell
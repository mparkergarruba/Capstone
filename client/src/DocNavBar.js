import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react'

function DocNavBar() {

    return(
        <div>
            <Menu>
                <Menu.Item>
                    <Button as={Link} color='blue' to='/docpage'>
                        <Icon link name='user md' />
                        Home
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as={Link} color='blue' to='/docpage/patients'>
                        <Icon link name='users' />
                        Patients
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as={Link} color='blue' to='/docpage/schedule/pending'>
                        <Icon link name='calendar alternate' />
                        Schedule
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as={Link} color='blue' to='/docout'>
                        <Icon link name='window close' />
                        Logout
                    </Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default DocNavBar
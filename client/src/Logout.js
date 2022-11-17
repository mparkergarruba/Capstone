import {useNavigate} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

function Logout({setPat}){

    let navigate = useNavigate()

    function handleLogOut(){

        fetch("/logout", { method: "DELETE" })
        .then((r) => {
            if (r.ok) {
            setPat(null);
            }
        });
        navigate('/')
    }
    

    return(
        <div>
            <Button color='black' onClick={handleLogOut}>
                <Icon link name='window close' />
                Logout
            </Button>
        </div>
    )
}

export default Logout
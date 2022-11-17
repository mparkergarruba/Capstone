import {useNavigate} from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react'

function DocOut({ setDoc }) {
    let navigate = useNavigate()

    function handleLogOut(){

        fetch("/docout", { method: "DELETE" })
        .then((r) => {
            if (r.ok) {
            setDoc(null);
            }
        });
        navigate('/')
    }
    

    return(
        <div>
            <Button onClick={handleLogOut} color='black'>
                <Icon  name='window close' />
                Logout
            </Button>
        </div>
    )
}

export default DocOut
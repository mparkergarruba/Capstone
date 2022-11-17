import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function PatAppNav() {

    return(
        <div>
            <Button color='blue' as={Link} to="/patient/appointments/request">Request Appointment</Button>
        </div>
    )
}

export default PatAppNav